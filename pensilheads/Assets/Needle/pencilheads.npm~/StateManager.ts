
import { IPointerClickHandler, PointerEventData } from "@needle-tools/engine";
import { Behaviour, EventList, GameObject, serializable } from "@needle-tools/engine";
import { Unsubscriber } from "svelte/motion";
import { writable } from "svelte/store";

// Documentation → https://docs.needle.tools/scripting
export enum AppState {
    None = "None",
    Start = "Start",
    Result = "Result",
    Level1 = "Level1",
    Level2 = "Level2",
};

export class StateSetter extends Behaviour implements IPointerClickHandler
{
    state: string = "";

    onPointerClick?(args: PointerEventData) {

        let s = AppState[this.state];
        if(s == undefined)
        {
            console.error("State not found: " + this.state);
            return;
        }
        CurrentState.set(AppState[s]);
    }
}

export class StateListener extends Behaviour{

    private stateSub: Unsubscriber;

    @serializable(EventList)
    onStart?: EventList;

    @serializable(EventList)
    onLevel1?: EventList;

    @serializable(EventList)
    onResult?: EventList;

    start(){
        
        CurrentState.set(AppState.Start);
        this.stateSub = CurrentState.subscribe(this.publishState.bind(this));
    }

    onDestroy(){
        this.stateSub.call(this);
    }

    publishState(state: AppState)
    {
        console.log(state);
        if(state === "Start") this.onStart?.invoke();
        if(state === "Level1") this.onLevel1?.invoke();
        if(state === "Result") this.onResult?.invoke();
    }
}

export const CurrentState = writable(AppState.None);


export function GetCurrentState(): AppState{
    //TODO: find out if we can also have a getter here
    return CurrentStateValue;
}

export function GetPreviousState(): AppState{
    //TODO: find out if we can also have a getter here
    return PreviousStateValue;
}


let CurrentStateValue: AppState = AppState.None;
let PreviousStateValue: AppState = AppState.None;


export class StateManager extends Behaviour {

    private static _initialized: boolean = false;

    awake() {
        if (StateManager._initialized) return;
        CurrentState.subscribe(this.onStateChanged.bind(this));
        StateManager._initialized = true;
    }

    start(){
        CurrentState.set(AppState.Start);
    }

    onStateChanged(state: AppState){
        PreviousStateValue = CurrentStateValue; 
        CurrentStateValue = state; 
        console.log("Setting state to ", state); 
    }

}