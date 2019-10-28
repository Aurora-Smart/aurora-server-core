import {SimpleDeviceActionParameter} from "./SimpleDeviceActionParameter";

export interface ActionRequest {
    target: string;
    actionIdentifier: number;
    parameter: SimpleDeviceActionParameter[];
}
