/**
 * Logger-Konfiguration
 */
import {ILoggingService} from "./ILoggingService";

export interface ILoggerConfiguration {
    /**
     * Gibt an, ob gegen einen Logging-Service geloggt werden soll
     */
    useService: ILoggingService;

    /**
     * Gibt an, ob in der Konsole geloggt werden soll
     */
    useConsole: boolean;

    /**
     * Gibt an, ob in eine Datei geloggt werden soll
     */
    useFile: boolean;

    /**
     * Herkunft des Loggers (eigener Service-name)
     */
    origin: string;

    /**
     * Gibt an, ob interne Exceptions durchgeleitet oder ignoriert werden sollen
     */
    ignoreInternalLoggerErrors: boolean;

    /**
     * Gibt an, ob Logging-Attachements mit geloggt werden sollen
     * Hierbei kann es sich um große Objelte handeln, die die Anwendung verlangsamen können
     */
    logAttachements: boolean;
}
