export class LogEntry {
    constructor(
        public value: string,
        public hint: string,
        public timestamp: Date = new Date(),
    ) { }
}