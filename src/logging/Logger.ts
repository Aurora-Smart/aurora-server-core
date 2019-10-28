import {ILoggerConfiguration} from "./ILoggerConfiguration";
import {LOG_LEVEL_ERROR, LOG_LEVEL_INFORMATION, LOG_LEVEL_VERBOSE, LOG_LEVEL_WARNING, LogRequest} from "./LogRequest";
import {ConsoleLogger} from "./ConsoleLogger";

/**
 * Logger-Service
 * Loggt je nach konfiguration in der Konsole / Datei / Service
 */
export abstract class Logger {
    /**
     * Konfiguration des Loggers
     */
    static configuration: ILoggerConfiguration = {
        useConsole: true,
        useFile: false,
        useService:  null,
        origin: null,
        ignoreInternalLoggerErrors: false,
        logAttachements: false
    };

    /**
     * Logger für die Konsole
     */
    private static consoleLogger = new ConsoleLogger();

    /**
     * Loggt einen Error
     * @param message Nachricht die geloggt werden soll
     * @param identifier Eindeutiger Identifier des Log-Ortes
     * @param attachment Optionale Zusatzinformationen
     */
    static error(message: string, identifier: string, attachment: any=null) {
        this.log(LOG_LEVEL_ERROR, message, identifier, attachment).then().catch(reason => {
            console.error(reason);
        });
    }

    /**
     * Loggt eine Information
     * @param message Nachricht die geloggt werden soll
     * @param identifier Eindeutiger Identifier des Log-Ortes
     * @param attachment Optionale Zusatzinformationen
     */
    static information(message: string, identifier: string, attachment: any=null) {
        this.log(LOG_LEVEL_INFORMATION, message, identifier, attachment).then().catch(reason => {
            console.error(reason);
        });

    }

    /**
     * Loggt einen Verbose
     * @param message Nachricht die geloggt werden soll
     * @param identifier Eindeutiger Identifier des Log-Ortes
     * @param attachment Optionale Zusatzinformationen
     */
    static verbose(message: string, identifier: string, attachment: any = null) {
        this.log(LOG_LEVEL_VERBOSE, message, identifier, attachment).then().catch(reason => {
            console.error(reason);
        });
    }

    /**
     * Loggt eine Warnung
     * @param message Nachricht die geloggt werden soll
     * @param identifier Eindeutiger Identifier des Log-Ortes
     * @param attachment Optionale Zusatzinformationen
     */
    static warn(message: string, identifier: string, attachment: any=null) {
        this.log(LOG_LEVEL_WARNING, message, identifier, attachment).then().catch(reason => {
            console.error(reason);
        });
    }

    /**
     * Loggt einen Eintrag
     * @param level LogLevel
     * @param message Nachricht, die geloggt werden soll
     * @param identifier Identifier der Nachricht
     * @param attachement Mögliche Anhänge der nachricht (optional)
     */
    private static async log(level: number, message: string, identifier, attachement: any) {
        //LogRequest erzeugen
        const logRequest = new LogRequest();
        logRequest.identifier = identifier;
        logRequest.message = message;
        logRequest.logLevel = level;
        logRequest.origin = this.configuration.origin;
        logRequest.attachement = this.configuration.logAttachements ? attachement : undefined;

        //In der Konsole loggen
        if(this.configuration.useConsole)
            await this.consoleLogger.log(logRequest);

        //In File Loggen
        //TODO implementieren

        //In Service loggen
        if(this.configuration.useService) {
            try {
                await this.configuration.useService.log(logRequest)
            } catch (e) {
                Logger.throwError("Beim Logging gegen den LoggingService ist ein Fehler aufgetreten", e);
            }
        }



    }

    /**
     * Loggt einen Error in der Console
     * Je nach Konfiguration wird der Error als Exception geworfen
     * @param error Error, der geworfen werden soll
     * @param attachment Mögliche Anhänge des Errors
     */
    private static throwError(error: string, attachment: any = null) {
        console.error(error);
        if(attachment)
            console.error(attachment);

        if(!this.configuration.ignoreInternalLoggerErrors)
            throw error;
        else
            return;
    }




}
