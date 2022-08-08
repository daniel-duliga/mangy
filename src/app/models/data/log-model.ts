import { EventEmitter } from "@angular/core";
import { AppModel } from "./app-model";

export default class LogModel {
    onChanged: EventEmitter<void> = new EventEmitter();

    constructor(
        private _parent: AppModel,
        private _data: LogEntry[] = []
    ) { }

    add(value: string, hint: string = '') {
        this._data.push(new LogEntry(value, hint));
        this._parent.persist();
        this.onChanged.emit();
    }

    clear() {
        this._data = [];
        this._parent.persist();
        this.onChanged.emit();
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