import { List } from "./list";
import { LogEntry } from "./log-entry";

export class PersistentData {
    //#region Log
    private _log: LogEntry[] = [];

    public get log(): LogEntry[] {
        return this._log;
    }

    addToLog(value: string, hint: string = '') {
        this.log.unshift(new LogEntry(value, hint));
        this.persist();
    }

    clearLog() {
        this._log = [];
        this.persist();
    }
    //#endregion

    //#region Chaos Factor
    private _chaosFactor = 4;

    public get chaosFactor(): number { return this._chaosFactor; }

    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this.persist();
    }
    //#endregion

    //#region Lists
    private _lists: List[] = [];

    public get lists(): List[] {
        return this._lists;
    }

    public addList(listName: string) {
        if (this._lists.findIndex(x => x.name === listName) === -1) {
            this._lists.push(new List(listName));
            this.persist();
        }
    }

    public removeList(list: string) {
        this._lists = this._lists.filter(x => x.name !== list);
        this.persist();
    }

    public addToList(listName: string, value: string) {
        const index = this._lists.findIndex(x => x.name === listName);
        if (index > -1 && !this._lists[index].values.includes(value)) {
            this._lists[index].values.push(value);
        }
        this.persist();
    }

    public removeFromList(listName: string, value: string) {
        const index = this._lists.findIndex(x => x.name === listName);
        if (index > -1) {
            this._lists[index].values = this._lists[index].values.filter(x => x !== value);
        }
        this.persist();
    }
    //#endregion

    //#region Persistence
    private static key = 'data';

    private persist() {
        localStorage.setItem(PersistentData.key, JSON.stringify(this));
    }

    public loadFromStorage() {
        const rawData = localStorage.getItem(PersistentData.key);
        if (rawData) {
            const result = JSON.parse(rawData);
            this._log = result._log;
            this._chaosFactor = result._chaosFactor;
            this._lists = result._lists;
        }
    }
    //#endregion
}