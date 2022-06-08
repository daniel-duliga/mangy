export class ListTable {
    constructor(
        private rows: string[]
    ) {}

    roll(dice: number): string {
        return this.rows[dice];
    }
}