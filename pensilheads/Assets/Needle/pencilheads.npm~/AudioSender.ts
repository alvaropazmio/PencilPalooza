import { Behaviour, serializable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class AudioSender extends Behaviour {

    @serializable()
    audioName: string = "none";
    
    public sendSoundCommand(){
        this.context.connection?.send("soundon", { soundname:this.audioName });
        console.log("send soundon")
    }
}