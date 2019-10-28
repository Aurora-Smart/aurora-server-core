import {DeviceEventValue} from "./DeviceEventValue";

/**
 * Event, das von einem Gerät ausgelöst werden kann
 */
export interface DeviceEvent {

    /**
     * Identifier des Events
     */
    identifier: string;

    /**
     * Identifier des EventTypen
     */
    eventTypeIdentifier: string;


    /**
     * Anzeigename des Events
     */
    label: string;

    /**
     * Werte, die beim Auslösen des Events übertragen werden
     */
    values?: DeviceEventValue[];
}
