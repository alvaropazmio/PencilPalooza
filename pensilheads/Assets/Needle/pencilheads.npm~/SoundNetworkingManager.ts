import { Behaviour, serializable,AudioSource } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting
declare type AudioClip = string;
export class SoundNetworkingManager extends Behaviour {

/*     @serializable(URL)
    clips: AudioSource[] = []; */

    @serializable(AudioSource)
    duckSound: AudioSource;

    @serializable(AudioSource)
    carSound: AudioSource;

    @serializable(AudioSource)
    springSound: AudioSource;

    @serializable(AudioSource)
    bellSound: AudioSource;


    @serializable(AudioSource)
    winSound: AudioSource;

    @serializable(AudioSource)
    backgroundMusic: AudioSource;

    @serializable()
    myStringField: string = "Hello World";
    
    onEnable(): void {
        this.context.connection?.beginListen("soundon", this.onReceivedSoundMessage);
    }

/*     public SpawnSnowball(pos: Vector3, velocity: Vector3) {
        console.log("SPAWN SNOWBALL", pos, velocity);
        const go = GameObject.instantiate(this.snowballPrefab.gameObject);
        const snowball = go!.getComponent(Rigidbody)!;
        snowball.gameObject.position.copy(pos);
        snowball.setWorldPosition(pos.x, pos.y, pos.z);
        snowball.setVelocity(velocity);
    } */


    private onReceivedSoundMessage = (data: any) => {
        console.log("RECEIVED Sound", data.soundname);
       // const snowballData = data as SnowballData;
       // const pos = new Vector3(snowballData.xPos, snowballData.yPos, snowballData.zPos);
       // const vel = new Vector3(snowballData.xVel, snowballData.yVel, snowballData.zVel);
       // this.SpawnSnowball(pos, vel);

       if(data.soundname == "duck"){
           this.duckSound.play();

       }

         if(data.soundname == "car"){
          this.carSound.play();

         }

         if(data.soundname == "bell"){
            this.bellSound.play();

           }

           if(data.soundname == "spring"){
            this.springSound.play();

           }

           if(data.soundname == "win"){
            this.winSound.play();

           }
         
            if(data.soundname == "backgroundmusic"){

                if(data.soundon == false){
                    this.backgroundMusic.stop();
                    console.log("stop background music");
                } else{
                    this.backgroundMusic.play();
                    console.log("play background music");
                }
            }
}
}

export class SnowballData {
    xPos: number;
    yPos: number;
    zPos: number;
    xVel: number;
    yVel: number;
    zVel: number;
}