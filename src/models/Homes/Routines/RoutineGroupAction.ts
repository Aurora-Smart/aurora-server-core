import {DeviceAction} from "../../DeviceActions/DeviceAction";
import {Group} from "../Groups/Group";

export interface RoutineGroupAction {
    group: Group;
    action: DeviceAction;
}
