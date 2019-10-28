import {ILoggingService} from "./ILoggingService";
import {LogRequest} from "./LogRequest";

export class ConsoleLogger implements ILoggingService{
    async log(req: LogRequest): Promise<void> {
        try {
            console.log(`${req.origin} | ${req.logLevel} | ${req.identifier} | ${req.message}`);
        } catch (e) {
            console.error("Beim Loggen in die Konsole ist ein Fehler aufgetreten.");
            console.error(e);
            console.log("Vollständiger Log-Request:");
            console.log(req);
        }
    }

}

/**
 * Eindeutige Identifizierung des ConsoleLoggers
 */
export const CONSOLE_LOGGER = Symbol("Console Logger");
