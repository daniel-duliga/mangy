import ListItem from "../../list-item";
import { AppModel } from "../app-model";
import { MythicNpcModel } from "./mythic-npc-model";

export default class MythicModel {
    constructor(
        private _parent: AppModel,
        private _chaosFactor: number = 4,
        private _pcs: ListItem[] = [],
        private _npcs: MythicNpcModel[] = [],
        private _threads: ListItem[] = [],
    ) { }

    // chaos factor

    public get chaosFactor(): number { return this._chaosFactor; }
    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this._parent.persist();
    }

    // lists

    public get pcs(): ListItem[] {
        return this._pcs;
    }
    public set pcs(v: ListItem[]) {
        this._pcs = v;
        this._parent.persist();
    }

    public get npcs(): MythicNpcModel[] {
        return [...this._npcs];
    }
    public set npcs(v: MythicNpcModel[]) {
        this._npcs = v;
        this._parent.persist();
    }

    public get threads(): ListItem[] {
        return this._threads;
    }
    public set threads(v: ListItem[]) {
        this._threads = v;
        this._parent.persist();
    }
}