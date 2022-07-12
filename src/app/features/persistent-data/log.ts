import { LogEntry } from "./log-entry";
import { PersistentData } from "./persistent-data";

export default class Log {
    constructor(
        private _parent: PersistentData,
        private _data: LogEntry[] = []
    ) { }

    add(value: string, hint: string = '') {
        this._data.unshift(new LogEntry(value, hint));
        this._parent.persist();
    }

    clear() {
        this._data = [];
        this._parent.persist();
    }

    getData(): LogEntry[] {
        return this._data;
    }
}