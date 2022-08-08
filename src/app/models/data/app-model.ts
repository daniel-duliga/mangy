import LogModel from "./log-model";
import MythicModel from "./mythic/mythic-model";

export class AppModel {
    private static key = 'data';
    
    public log: LogModel;
    public mythic: MythicModel;

    constructor() {
        const rawData = localStorage.getItem(AppModel.key);
        if (rawData) {
            const result = JSON.parse(rawData);
            this.log = new LogModel(this, result.log._data);
            this.mythic = new MythicModel(
                this,
                result.mythic._chaosFactor,
                result.mythic._pcs,
                result.mythic._npcs,
                result.mythic._threads
            );
        } else {
            this.log = new LogModel(this);
            this.mythic = new MythicModel(this);
        }
    }

    public persist() {
        localStorage.setItem(AppModel.key, JSON.stringify(this, replacer));

        function replacer(key: string, value: any): any {
            if (key === '_parent' || key === 'onChanged') {
                return null;
            } else {
                return value;
            }
        }
    }
}