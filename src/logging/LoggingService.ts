import {injectable} from "inversify";
import {ILoggingService} from "./ILoggingService";
import {LogRequest} from "./LogRequest";
import {validate} from "class-validator";

const {post} = require('axios');

/**
 * Kommuniziert mit dem Logging-Service
 */
@injectable()
export class LoggingService implements ILoggingService {

    /**
     * URL des Logging-Services
     */
    public loggingServiceEndpointUrl = "";


    /**
     * Schickt eine Nachricht an den Logging-Service
     * @param req Informationen, des Log-Eintrags
     */
    async log(req: LogRequest): Promise<void> {
        //Prüfen, ob der Endpunkt konfiguriert wurde
        if(this.loggingServiceEndpointUrl.length < 1)
            throw "Es wurde noch kein Endpunkt für einen Logging-Service komfiguriert.";

        //LoggingRequest validieren
        const validationErrors = await validate(req);
        if(validationErrors.length > 0)
            throw validationErrors;

        try {
            //Log-Eintrag an Log-Service senden
            await post(this.loggingServiceEndpointUrl, req);
        } catch (e) {
            throw "Bei der Kommunikation mit dem LoggingService ist ein Fehler aufgetreten.";
        }
    }


}
