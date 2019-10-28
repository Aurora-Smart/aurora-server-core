/**
 * Parameter, der beim Ausführen einer Aktion übertragen wird
 */
export interface DeviceActionParameter {
    /**
     * Identifier des Parameters
     */
    identifier: string;

    /**
     * Anzeigename des Parameters
     */
    label: string;

    /**
     * Datentyp des Parameters
     */
    type: string;

    /**
     * Wert des Parameters
     */
    value?: any;
}
