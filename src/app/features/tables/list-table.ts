export class ListTable {
    constructor(
        private rows: ListTableRow[]
    ) {}

    roll(dice: number): ListTableRow {
        return this.rows[dice - 1];
    }
}

export class ListTableRow {
    constructor(
        public value: string,
        public notes: string = '',
    ) {}
}