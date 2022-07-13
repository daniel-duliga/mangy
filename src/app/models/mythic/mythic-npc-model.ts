export default class MythicNpcModel {
    constructor(
        public name: string,
        public identity: Descriptor = new Descriptor(),
        public personality: Descriptor = new Descriptor(),
        public activity: Descriptor = new Descriptor(),
    ) {}
}

class Descriptor {
    constructor(
        public value: string = '',
        public active: boolean = false,
    ) {}
}