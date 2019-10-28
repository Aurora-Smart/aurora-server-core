import {DeviceEvent} from "../../DeviceEvents/DeviceEvent";
import {Device} from "../Devices/Device";

export interface DeviceEventTrigger {
    origin: Device;
    event: DeviceEvent;
}
