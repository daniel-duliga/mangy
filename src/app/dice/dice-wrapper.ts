export class DiceWrapper {
    constructor(
        public sum: number = 0,
        public rolls: { [id: string]: number[] } = {}
    ) { }

    public get details(): string {
        let result = '';
        for (const formula of Object.keys(this.rolls).reverse()) {
            result = result.concat(`${formula}(`);
            const dice = this.rolls[formula];
            for (const diceValue of dice) {
                result = result.concat(diceValue.toString(), ', ');
            }
            result = result
                .slice(0, result.length - 2)
                .concat(') + ');
        }
        return result.slice(0, result.length - 3);
    }
}