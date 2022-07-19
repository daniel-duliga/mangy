import ListItem from "../../list-item";

export class MythicNpcModel extends ListItem {
    constructor(
        id: string,
        name: string,
        public identity: Descriptor = new Descriptor(),
        public personality: Descriptor = new Descriptor(),
        public activity: Descriptor = new Descriptor(),
        public disposition: number = 0,
    ) {
        super(id, name);
    }
}

export class Descriptor {
    constructor(
        public value: string = '',
        public active: boolean = false,
        public modifier: "lowers" | "neutral" | "intensifies" = "neutral"
    ) {}
}