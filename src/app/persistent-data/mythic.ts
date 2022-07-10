import { PersistentData } from "./persistent-data";

type listName = "pcs" | "npcs" | "threads";

export default class Mythic {
    constructor(
        private _parent: PersistentData,
        private _chaosFactor: number = 4,
        private _pcs: string[] = [],
        private _npcs: string[] = [],
        private _threads: string[] = [],
    ) { }

    // chaos factor
    public get chaosFactor(): number { return this._chaosFactor; }
    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this._parent.persist();
    }

    // lists
    public getList(name: listName): string[] {
        switch (name) {
            case "pcs": return this._pcs;
            case "npcs": return this._npcs;
            case "threads": return this._threads;
            default: return [];
        }
    }
    public setList(name: listName, value: string[]) {
        if (name === "pcs") {
            this._pcs = value;
        } else if (name === "npcs") {
            this._npcs = value;
        } else if (name === "threads") {
            this._threads = value;
        }
        this._parent.persist();
    }
}