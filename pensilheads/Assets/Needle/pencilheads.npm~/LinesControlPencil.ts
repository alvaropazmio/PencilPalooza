import { Behaviour, GameObject, OrbitControls, serializable, Image } from "@needle-tools/engine";
import { LinesDrawerPencil} from "./LinesDrawerPencil";

export class LinesControlPencil extends Behaviour {

    @serializable(OrbitControls)
    orbit?: OrbitControls;

    @serializable(Image)
    orbitUI?: Image;

    @serializable(LinesDrawerPencil)
    lines!: LinesDrawerPencil;

    @serializable(Image)
    linesUI?: Image;

    @serializable()
    defaultState: boolean = true;

    start() {
        this.setDrawingMode(this.defaultState);
    }

    // Called via events to switch between line drawing and orbit controls
    setDrawingMode(state: boolean) {
        if(!this.orbit || !this.orbitUI || !this.lines || !this.linesUI) return;

        this.orbit.enabled = !state;
        this.orbitUI.color.a = !state ? 0.8 : 0.3;

        this.lines.enabled = state;
        this.linesUI.color.a = state ? 0.8 : 0.3;
    }
}