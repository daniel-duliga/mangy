import ListItem from "../../list-item";

export class MythicNpcModel extends ListItem {
    constructor(
        id: string,
        name: string,
        public identity1: Descriptor = new Descriptor(),
        public identity2: Descriptor = new Descriptor(),
        public personality1: Descriptor = new Descriptor(),
        public personality2: Descriptor = new Descriptor(),
        public activity1: Descriptor = new Descriptor(),
        public activity2: Descriptor = new Descriptor(),
        public disposition: number = 0,
    ) {
        super(id, name);
    }
}

export class Descriptor {
    constructor(
        public value: string = '',
        public active: boolean = false,
        public modifier: DescriptorModifier = "neutral"
    ) {}
}

export type DescriptorModifier = "lowers" | "neutral" | "intensifies";