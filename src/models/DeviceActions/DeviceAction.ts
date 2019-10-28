import {DeviceActionParameter} from "./DeviceActionParameter";

/**
 * Aktion, die ein Gerät ausführen kann
 */
export interface DeviceAction {
    /**
     * Identifier der Aktion
     */
    identifier: number;

    /**
     * Anzeigename des Aktion
     */
    label: string;

    /**
     * Parameter, die die Funktion entgegen nimmt
     */
    parameter: DeviceActionParameter[];
}
