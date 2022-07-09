import { PersistentData } from "./persistent-data";

type listName = "PCs" | "NPCs" | "Threads";

export default class Mythic {
    constructor(
        private _parent: PersistentData,
        private _chaosFactor: number = 4,
        private _PCs: string[] = [],
        private _NPCs: string[] = [],
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
            case "PCs": return this._PCs;
            case "NPCs": return this._NPCs;
            case "Threads": return this._threads;
            default: return [];
        }
    }
    public setList(name: listName, value: string[]) {
        if (name === "PCs") {
            this._PCs = value;
        } else if (name === "NPCs") {
            this._NPCs = value;
        } else if (name === "Threads") {
            this._threads = value;
        }
        this._parent.persist();
    }
}