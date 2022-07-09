import { PersistentData } from "./persistent-data";

export default class Mythic {
    constructor(
        private _parent: PersistentData,
        private _chaosFactor: number = 4,
    ) { }

    public get chaosFactor(): number { return this._chaosFactor; }
    public set chaosFactor(v: number) {
        this._chaosFactor = v;
        this._parent.persist();
    }

    //#region Lists
    // private _lists: List[] = [];

    // public get lists(): List[] {
    //     return this._lists;
    // }

    // public addList(listName: string) {
    //     if (this._lists.findIndex(x => x.name === listName) === -1) {
    //         this._lists.push(new List(listName));
    //         this.persist();
    //     }
    // }

    // public removeList(list: string) {
    //     this._lists = this._lists.filter(x => x.name !== list);
    //     this.persist();
    // }

    // public addToList(listName: string, value: string) {
    //     const index = this._lists.findIndex(x => x.name === listName);
    //     if (index > -1 && !this._lists[index].values.includes(value)) {
    //         this._lists[index].values.push(value);
    //     }
    //     this.persist();
    // }

    // public removeFromList(listName: string, value: string) {
    //     const index = this._lists.findIndex(x => x.name === listName);
    //     if (index > -1) {
    //         this._lists[index].values = this._lists[index].values.filter(x => x !== value);
    //     }
    //     this.persist();
    // }
    //#endregion
}