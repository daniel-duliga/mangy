import { EventEmitter } from "@angular/core";
import { AppModel } from "./app-model";

export default class LogModel {
    onChanged: EventEmitter<void> = new EventEmitter();

    constructor(
        private _appModel: AppModel,
        private _data: LogEntry[] = []
    ) { }

    add(value: string, hint: string = '') {
        this._data.push(new LogEntry(value, hint));
        this._appModel.persist();
        this.onChanged.emit();
    }

    clear() {
        this._data = [];
        this._appModel.persist();
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
    
    public get lines() : string[] {
        return this.value.split('\n');
    }
}