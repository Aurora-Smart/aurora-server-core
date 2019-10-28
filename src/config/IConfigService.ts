import {LoggingServiceConfig} from "./LoggingServiceConfig";
import {DeviceServiceConfig} from "./DeviceServiceConfig";
import {DeviceColorServiceConfig} from "./DeviceColorServiceConfig";
import {UpdaterServiceConfig} from "./UpdaterServiceConfig";

export interface IConfigService {
    /**
     * Holt sich die Auth-Credentials vom Config-Service
     */
    getAuthCred(): Promise<any>;

    /**
     * Holt sich die Firebase-Konfiguration vom Config-Service
     */
    getFirebaseConfig(): Promise<any>;

    /**
     * Holt sich die LoggingServiceConfig
     */
    getLoggingServiceConfig(): Promise<LoggingServiceConfig>;

    /**
     * Holt sich die DeviceServiceConfig
     */
    getDeviceServiceConfig(): Promise<DeviceServiceConfig>;

    /**
     * Holt sich die DeviceColorServiceConfig
     */
    getDeviceColorServiceConfig(): Promise<DeviceColorServiceConfig>;

    /**
     * Holt sich die UpdatererviceConfig
     */
    getUpdaterServiceConfig(): Promise<UpdaterServiceConfig>;
}

/**
 * Eindeutiger Identifier des ConfigServices
 */
export const CONFIG_SERVICE= Symbol("Config Service");
