import { Behaviour, serializable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class ClockAnimation extends Behaviour {

    @serializable()
    myStringField: string = "Hello World";
    
    start() {
    }
}