import 'reflect-metadata';
import {ConfigService} from "../src";

const cs = new ConfigService();
cs.configServiceUrl = "http://localhost:3000/";
cs.getLoggingServiceConfig().then(value =>{
    console.log(value);
}).catch(reason => {
    console.log(reason);
})
