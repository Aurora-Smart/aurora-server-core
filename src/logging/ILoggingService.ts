import {LogRequest} from "./LogRequest";

/**
 * Service, über den Logging-Einträge verarbeitet werden
 * Kommuniziert mit dem Service fürs Logging
 * */
export interface ILoggingService {

    /**
     * Schickt eine Nachricht an den Logging-Service
     * @param req Informationen, des Log-Eintrags
     */
    log(req: LogRequest): Promise<void>;
}

/**
 * Eindeutiger Identifier des Logging-Services
 */
export const LOGGING_SERVICE = Symbol("Logging Service");
