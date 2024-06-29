/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { AudioRandomizer } from "../AudioRandomizer.js";
import { AudioSender } from "../AudioSender.js";
import { SoundNetworkingManager } from "../SoundNetworkingManager.js";
import { SnowballData } from "../SoundNetworkingManager.js";
import { StateManager } from "../StateManager.js";

// Register types
TypeStore.add("AudioRandomizer", AudioRandomizer);
TypeStore.add("AudioSender", AudioSender);
TypeStore.add("SoundNetworkingManager", SoundNetworkingManager);
TypeStore.add("SnowballData", SnowballData);
TypeStore.add("StateManager", StateManager);
