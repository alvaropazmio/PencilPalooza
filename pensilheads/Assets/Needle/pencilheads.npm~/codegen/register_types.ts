/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { AudioRandomizer } from "../AudioRandomizer.js";
import { AudioSender } from "../AudioSender.js";
import { LinesDrawerPencil } from "../LinesDrawerPencil.js";
import { LineInstanceHandler } from "../LinesManagerPencil.js";
import { LinesManagerPencil } from "../LinesManagerPencil.js";
import { SoundNetworkingManager } from "../SoundNetworkingManager.js";
import { SnowballData } from "../SoundNetworkingManager.js";
import { StateSetter } from "../StateManager.js";
import { StateListener } from "../StateManager.js";
import { StateManager } from "../StateManager.js";

// Register types
TypeStore.add("AudioRandomizer", AudioRandomizer);
TypeStore.add("AudioSender", AudioSender);
TypeStore.add("LinesDrawerPencil", LinesDrawerPencil);
TypeStore.add("LineInstanceHandler", LineInstanceHandler);
TypeStore.add("LinesManagerPencil", LinesManagerPencil);
TypeStore.add("SoundNetworkingManager", SoundNetworkingManager);
TypeStore.add("SnowballData", SnowballData);
TypeStore.add("StateSetter", StateSetter);
TypeStore.add("StateListener", StateListener);
TypeStore.add("StateManager", StateManager);
