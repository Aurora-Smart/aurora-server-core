import {Routine} from "../Routines/Routine";
import {TriggerCondition} from "./TriggerCondition";

export interface Trigger {
    name?: string;
    description?: string;
    triggerType?: string;
    triggeredBy?: any;
    triggers?: Routine[];
    conditions?: TriggerCondition[];
}
