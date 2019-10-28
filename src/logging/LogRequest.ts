import {IsInt, IsString, Max, MaxLength, Min} from "class-validator";

/**
 * Definiert einen LogRequest, über den Services loggen können
 */
export class LogRequest {

    /**
     * LogLevel
     * 1 - Error
     * 2 - Warning
     * 3 - Information
     * 4- Verbose
     */
    @IsInt()
    @Min(1)
    @Max(4)
    logLevel: number;

    /**
     * Log-Nachricht
     */
    @IsString()
    @MaxLength(255)
    message: string;

    /**
     * Service, aus dem der Log-Eintrag stammt
     */
    @IsString()
    @MaxLength(50)
    origin: string;

    /**
     * Eindeutiger Identifier der Stelle, an der geloggt wird
     */
    @IsString()
    @MaxLength(100)
    identifier: string;

    /**
     * Zusatzinformationen
     */
    attachement: any;

    constructor(init ?: Partial<{Type}>)
    {
        Object.assign(this, init);
    }
}

/**
 * Error
 */
export const LOG_LEVEL_ERROR = 1;

/**
 * Warning
 */
export const LOG_LEVEL_WARNING = 2;

/**
 * Information
 */
export const LOG_LEVEL_INFORMATION = 3;

/**
 * Verbose
 */
export const LOG_LEVEL_VERBOSE = 4;
