import { AppModel } from "../app-model";
import MythicNpcModel from "./mythic-npc-model";

export default class MythicModel {
    constructor(
        private _parent: AppModel,
        private _chaosFactor: number = 4,
        private _pcs: string[] = [],
        private _npcs: MythicNpcModel[] = [],
        private _threads: string[] = [],
    ) { }

    // chaos factor

    public get chaosFactor(): number { return this._chaosFactor; }
    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this._parent.persist();
    }

    // lists

    public get pcs() : string[] {
        return this._pcs;
    }
    public set pcs(v : string[]) {
        this._pcs = v;
        this._parent.persist();
    }
    
    public get npcs() : MythicNpcModel[] {
        return this._npcs;
    }
    public set npcs(v : MythicNpcModel[]) {
        this._npcs = v;
        this._parent.persist();
    }

    public get threads() : string[] {
        return this._threads;
    }
    public set threads(v : string[]) {
        this._threads = v;
        this._parent.persist();
    }
}