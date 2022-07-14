import { AppModel } from "./app-model";

export default class LogModel {
    constructor(
        private _parent: AppModel,
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

export class LogEntry {
    constructor(
        public value: string,
        public hint: string,
        public timestamp: Date = new Date(),
    ) { }
}