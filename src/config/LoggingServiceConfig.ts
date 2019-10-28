export interface LoggingServiceConfig {
    /**
     * Port, auf dem der Service gehostet werden soll
     */
    port: number;

    /**
     * Des MQTT-Servers
     */
    mqttServer: string;

    /**
     * Gibt an, ob in der Konsole geloggt werden soll
     */
    logInConsole: boolean;

    /**
     * Gibt an, ob LogRequests per MQTT gepublished werden sollen
     */
    logInMqtt: boolean;

    /**
     * Gibt an, ob in die Datenbank geloggt werden soll
     */
    logInDatabase: boolean;

    /**
     * Gibt an, ob in eine Datei geloggt werden soll
     */
    logInFile: boolean;
}
