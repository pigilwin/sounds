import { Audio } from "../audio/audio";
import { Database } from "./database";

export class Context {
    
    private static _instance: Context;
    
    private constructor(public readonly database: Database, public readonly audio: Audio){}

    public static load(database: Database, audio: Audio) {
        Context._instance = new Context(database, audio);
    }

    public static get(): Context {
        if (Context._instance === undefined) {
            throw new Error('Context has not been created correctly');
        }
        return Context._instance;
    }
}