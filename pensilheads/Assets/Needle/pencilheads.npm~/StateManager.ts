
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

export class StateSetter extends Behaviour implements IPointerClickHandler {
    state: string = "";

    onPointerClick?(args: PointerEventData) {

        let s = AppState[this.state];
        if (s == undefined) {
            console.error("State not found: " + this.state);
            return;
        }
        CurrentState.set(AppState[s]);
    }
}

export class StateListener extends Behaviour {

    private stateSub: Unsubscriber;

    @serializable(EventList)
    onStart?: EventList;

    @serializable(EventList)
    onLevel1?: EventList;

    @serializable(EventList)
    onLevel2?: EventList;

    @serializable(EventList)
    onResult?: EventList;

    onEnable(): void {
 
        this.context.connection?.beginListen("state", this.onReceivedStateMessage);
        console.log("Listening for state messages");
    }

    start() {

        CurrentState.set(AppState.Start);
        this.stateSub = CurrentState.subscribe(this.publishState.bind(this));
    }

    onDestroy() {
        this.stateSub.call(this);
    }

    public changeStateToLevel1(){
        CurrentState.set(AppState.Level1);
    }

    private onReceivedStateMessage = (data: any) => {
        console.log("RECEIVED State", data.statename);
       // const snowballData = data as SnowballData;
       // const pos = new Vector3(snowballData.xPos, snowballData.yPos, snowballData.zPos);
       // const vel = new Vector3(snowballData.xVel, snowballData.yVel, snowballData.zVel);
       // this.SpawnSnowball(pos, vel);
    
       if(data.statename == "start"){
            console.log("GOT !!!!! start");
    
       }
    
         if(data.soundname == "level1"){
            console.log("GOT !!!!! Level 1");
            CurrentState.set(AppState.Level1);
    
         }
    
         if(data.soundname == "result"){
      
    
           }
    
    }

    publishState(state: AppState) {
        console.log(state);
        if (state === "Start") { 
            this.onStart?.invoke(); 
            this.context.connection?.send("state", { statename: "start" });
        }
        if (state === "Level1") { 
            this.onLevel1?.invoke();
            this.context.connection?.send("state", { statename: "level1" });
           
         }

         if (state === "Level2") { 
            this.onLevel1?.invoke();
            this.context.connection?.send("state", { statename: "level2" });
           
         }
        if (state === "Result") { 
            this.onResult?.invoke(); 
            this.context.connection?.send("state", { statename: "result" });
        }
    }
}

export const CurrentState = writable(AppState.None);


export function GetCurrentState(): AppState {
    //TODO: find out if we can also have a getter here
    return CurrentStateValue;
}

export function GetPreviousState(): AppState {
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

    start() {
        CurrentState.set(AppState.Start);
    }

    onStateChanged(state: AppState) {
        PreviousStateValue = CurrentStateValue;
        CurrentStateValue = state;
        console.log("Setting state to ", state);

        if (CurrentStateValue === AppState.Start) {
            this.context.connection?.send("state", { statename: "start" });
        }

        if (CurrentStateValue === AppState.Level1) {
            this.context.connection?.send("state", { statename: "level1" });
            console.log("Sending level1 into networking");
        }


    }

}