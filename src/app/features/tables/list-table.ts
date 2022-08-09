export class ListTable {
    constructor(
        private _rows: ListTableRow[]
    ) {}

    
    public get rows() : ListTableRow[] {
        return this._rows;
    }
    

    roll(dice: number): ListTableRow {
        return this._rows[dice - 1];
    }
}

export class ListTableRow {
    constructor(
        public value: string,
        public notes: string = '',
    ) {}
}