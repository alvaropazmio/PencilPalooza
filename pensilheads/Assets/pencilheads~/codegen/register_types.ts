/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { LineInstanceHandler } from "../LinesManager.js";
import { LinesManager } from "../LinesManager.js";

// Register types
TypeStore.add("LineInstanceHandler", LineInstanceHandler);
TypeStore.add("LinesManager", LinesManager);
