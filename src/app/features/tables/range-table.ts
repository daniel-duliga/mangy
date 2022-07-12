export class RangeTable {
    constructor(
        private rows: RangeTableRow[]
    ) { }

    roll(dice: number): RangeTableRow {
        return this.rows.filter(x => x.min <= dice && x.max >= dice)[0];
    }
}

export class RangeTableRow {
    constructor(
        public min: number,
        public max: number,
        public value: string,
        public notes: string = '',
    ) { }
}