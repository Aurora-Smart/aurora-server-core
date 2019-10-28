import {DeviceAction} from "../DeviceActions/DeviceAction";
import {DeviceEvent} from "../DeviceEvents/DeviceEvent";

/**
 * Typ eines Gerötes
 */
export interface DeviceType {
    /**
     * Identifier des Gerätes
     */
    identifier: string;

    /**
     * Anzeigename des Typen
     */
    label: string;

    /**
     * Actions, die vom Gerät ausgeführt werden können
     */
    actions?: DeviceAction[];

    /**
     * Events, die vom Gerät ausgelöst werden können
     */
    events?: DeviceEvent[];
}
