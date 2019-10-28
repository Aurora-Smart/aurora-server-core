import {RoutineGroupAction} from "./RoutineGroupAction";

export interface Routine {
    name?: string;
    description?: string;
    routineGroupActions?: RoutineGroupAction[];
}
