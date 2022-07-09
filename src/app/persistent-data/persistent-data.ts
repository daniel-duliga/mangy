import Log from "./log";
import Mythic from "./mythic";

export class PersistentData {
    private static key = 'data';
    
    public log: Log;
    public mythic: Mythic;

    constructor() {
        const rawData = localStorage.getItem(PersistentData.key);
        if (rawData) {
            const result = JSON.parse(rawData);
            this.log = new Log(this, result.log._data);
            this.mythic = new Mythic(this, result.mythic._chaosFactor);
        } else {
            this.log = new Log(this);
            this.mythic = new Mythic(this);
        }
    }

    public persist() {
        localStorage.setItem(PersistentData.key, JSON.stringify(this, replacer));

        function replacer(key: string, value: any): any {
            if (key === '_parent') {
                return null;
            } else {
                return value;
            }
        }
    }
}