export interface DeviceColorServiceConfig {
    /**
     * Port, auf dem der Service gehostet werden soll
     */
    port: number

    /**
     * URL zur Mqtt Verbindung
     */
    mqttUrl: string;

    /**
     * URL zum DeviceService
     */
    deviceServiceUrl: string;

}
