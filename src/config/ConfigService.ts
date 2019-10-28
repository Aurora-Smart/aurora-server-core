import {IConfigService} from "./IConfigService";
import {injectable} from "inversify";
import axios from "axios";
import {Logger} from "../logging/Logger";
import {DeviceServiceConfig} from "./DeviceServiceConfig";
import {LoggingServiceConfig} from "./LoggingServiceConfig";
import {DeviceColorServiceConfig} from "./DeviceColorServiceConfig";
import {UpdaterServiceConfig} from "./UpdaterServiceConfig";

@injectable()
export class ConfigService implements IConfigService {
    /**
     * URL des Config-Services
     */
    configServiceUrl = "";

    /**
     * Holt sich die Auth-Credentials vom Config-Service
     */
    getAuthCred(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade Auth-Konfiguration", "");
            axios.get(this.configServiceUrl + "auth")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    /**
     * Holt sich die Firebase-Konfiguration vom Config-Service
     */
    getFirebaseConfig(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade Firebase-Konfiguration", "");
            axios.get(this.configServiceUrl + "firebase")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    /**
     * Holt sich die DeviceService-Konfiguration vom Config-Service
     */
    getDeviceServiceConfig(): Promise<DeviceServiceConfig> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade DeviceService-Konfiguration", "4f18324c-19d8-457a-b8eb-07b433c65f0b");
            axios.get(this.configServiceUrl + "config/device-service")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    /**
     * Holt sich dieUpdaterService-Konfiguration vom Config-Service
     */
    getUpdaterServiceConfig(): Promise<UpdaterServiceConfig> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade DeviceService-Konfiguration", "97cdcd2e-d699-4aea-b27d-5c720afde2e3");
            axios.get(this.configServiceUrl + "config/updater-service")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    /**
     * Holt sich die DeviceService-Konfiguration vom Config-Service
     */
    getDeviceColorServiceConfig(): Promise<DeviceColorServiceConfig> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade DeviceColorService-Konfiguration", "e6d59187-32f2-48dc-8c99-0d2f4dc6763b");
            axios.get(this.configServiceUrl + "config/device-color-service")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    /**
     * Holt sich die LoggingService-Konfiguration vom Config-Service
     */
    getLoggingServiceConfig(): Promise<LoggingServiceConfig> {
        return new Promise<any>((resolve, reject) => {
            Logger.verbose("Lade LoggingService-Konfiguration", "97fdeab7-a696-4ed3-9083-d2c803569094");
            axios.get(this.configServiceUrl + "config/logging-service")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

}
