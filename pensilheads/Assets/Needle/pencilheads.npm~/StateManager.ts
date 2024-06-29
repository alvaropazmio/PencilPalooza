import { Behaviour, serializable } from "@needle-tools/engine";
import { writable } from "svelte/store";

// Documentation → https://docs.needle.tools/scripting
export enum AppState {
    None = "None",
    Start = "Start",
    Result = "Result",
    Level1 = "Level1",
    Level2 = "Level2",
};

export const CurrentState = writable(AppState.None);
//export const CurrentSelection = writable<Hotspot | null>(null);

export function GetCurrentState(): AppState{
    //TODO: find out if we can also have a getter here
    return CurrentStateValue; 
}

/*export function GetCurrentSelection(): Hotspot | null{
    return CurrentSelectionValue;
}*/

let CurrentStateValue: AppState = AppState.None;
//let CurrentSelectionValue: Hotspot | null = null;

export class StateManager extends Behaviour {

    private static _initialized: boolean = false;

    awake() {
        if (StateManager._initialized) return;
        CurrentState.subscribe(val => { CurrentStateValue = val; console.log("Setting state to ", val); });
        //CurrentSelection.subscribe(val => { CurrentSelectionValue = val; console.log("Setting selection to ", val); });
        StateManager._initialized = true;
    }

    start(){
        CurrentState.set(AppState.Start);
    }
}