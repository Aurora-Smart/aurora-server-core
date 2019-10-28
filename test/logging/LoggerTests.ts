import 'reflect-metadata';
import {suite, test} from "mocha-typescript";
import {Logger} from "../../src/logging/Logger";
import {LOG_LEVEL_VERBOSE, LogRequest} from "../../src";
import { expect } from 'chai';


@suite class LoggerTests {

    static before() {
    }

    static after() {
    }

    @test() ShouldLogInConsole(done) {
        console.log = function () {
            done();
        };
        Logger.verbose("Test", "ID");
    }

    @test() ShouldNotLogInConsole(done) {
        Logger.configuration.useConsole = false;
        console.log = function () {
            done("Logger sollte nicht in Konsole schreiben");
        };
        Logger.verbose("Test", "ID");
        done();
    }

    @test() ShouldSendRequestToLoggingService(done) {
        Logger.configuration.origin = "Test";
        Logger.configuration.useService = {
            async log(req: LogRequest): Promise<void> {
                expect(req.logLevel).to.equal(LOG_LEVEL_VERBOSE, "LogLevel ist nicht korrekt");
                expect(req.origin).to.equal("Test", "Origin ist nicht korrekt");
                expect(req.message).to.equal("Message", "Message ist nicht korrekt");
                expect(req.identifier).to.equal("ID", "Identifier ist nicht korrekt");
                done();
            }
        };
        Logger.verbose("Message", "ID");
    }





}
