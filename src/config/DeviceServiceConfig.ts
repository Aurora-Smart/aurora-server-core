export interface DeviceServiceConfig {
    /**
     * Port, auf dem der Service gehostet werden soll
     */
    port: number

    /**
     * URL zur Mqtt Verbindung
     */
    mqttUrl: string;

}
