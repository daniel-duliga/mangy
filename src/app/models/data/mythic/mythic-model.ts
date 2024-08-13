import { RangeTable, RangeTableRow } from "src/app/features/tables/range-table";
import ListItem from "../../list-item";
import { AppModel } from "../app-model";
import { MythicNpcModel } from "./mythic-npc-model";

export default class MythicModel {
    constructor(
        private _appModel: AppModel,
        private _chaosFactor: number = 4,
        private _pcs: ListItem[] = [],
        private _npcs: MythicNpcModel[] = [],
        private _threads: ListItem[] = [],
        private _adventureCrafterThemes: RangeTableRow[] | null = null,
    ) { }

    // chaos factor

    public get chaosFactor(): number { return this._chaosFactor; }
    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this._appModel.persist();
    }

    // lists

    public get pcs(): ListItem[] {
        return this._pcs;
    }
    public set pcs(v: ListItem[]) {
        this._pcs = v;
        this._appModel.persist();
    }

    public get npcs(): MythicNpcModel[] {
        return [...this._npcs];
    }
    public set npcs(v: MythicNpcModel[]) {
        this._npcs = v;
        this._appModel.persist();
    }

    public get threads(): ListItem[] {
        return this._threads;
    }
    public set threads(v: ListItem[]) {
        this._threads = v;
        this._appModel.persist();
    }

    // adventure crafter themes

    public get adventureCrafterThemes(): RangeTableRow[] | null {
        return this._adventureCrafterThemes;
    }
    public set adventureCrafterThemes(v: RangeTableRow[] | null) {
        this._adventureCrafterThemes = v;
        this._appModel.persist();
    }
}