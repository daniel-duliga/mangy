export class RangeTable {
    constructor(
        private rows: RangeTableRow[]
    ) { }

    roll(dice: number): string {
        return this.rows.filter(x => x.min <= dice && x.max >= dice)[0].value;
    }
}

export class RangeTableRow {
    constructor(
        public min: number,
        public max: number,
        public value: string,
    ) { }
}