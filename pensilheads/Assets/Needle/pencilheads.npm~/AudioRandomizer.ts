import { AudioSource, Behaviour, loadSync, serializable } from "@needle-tools/engine";
import { Vector2, PositionalAudio, AudioListener as THREELISTENER } from "three";

declare type AudioClip = string;
export class AudioRandomizer extends Behaviour {

    @serializable(URL)
    clips: AudioClip[] = [];
    @serializable(Vector2)
    pitchRange: Vector2 = new Vector2(1, 1);
    @serializable()
    volume: number = 1;

    private source: AudioSource|null=null;

    onEnable(): void {
        this.source = this.gameObject.getComponent(AudioSource);
    }
    play():void {
        if(this.source) {
            this.source.clip = this.clips[Math.floor(Math.random() * this.clips.length)];
            this.source.Sound!.playbackRate = Math.random() * (this.pitchRange.y - this.pitchRange.x) + this.pitchRange.x;
            this.source.volume = this.volume;
            this.source.play();
        } else {
            const audio = new Audio(this.clips[Math.floor(Math.random() * this.clips.length)]);
            audio.playbackRate = Math.random() * (this.pitchRange.y - this.pitchRange.x) + this.pitchRange.x;
            audio.volume = this.volume;
            audio.play();
        }
    }
}