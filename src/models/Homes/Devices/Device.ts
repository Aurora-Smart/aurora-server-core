import {DeviceType} from "../../DeviceTypes/DeviceType";
import {DeviceEvent} from "../../DeviceEvents/DeviceEvent";

/**
 * Smarthome Gerät
 */
export interface Device {

    /**
     * MAC Adresse des Gerätes
     */
    mac: string;

    /**
     * Name des Gerätes
     */
    name: string;

    /**
     * Typ des Gerätes
     */
    type: DeviceType;

    /**
     * Status des Gerätes
     */
    status?: any;
}
