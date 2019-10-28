/**
 * Wert, der beim Auslösen eines Events übeetragen wird
 */
export interface DeviceEventValue {
    /**
     * Identifier des Wertes
     */
    identifier: string;

    /**
     * Anzeigename des Gerätes
     */
    label: string;

    /**
     * Datentyp des Wertes (string, bool, etc.)
     */
    type: string;

    /**
     * Wert des Wertes
     */
    value?: any;
}
