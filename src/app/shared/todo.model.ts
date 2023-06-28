export class Todo {
    // text: string;
    // date: Date;
    // priority: string;
    // completed: boolean = false;

    constructor(
        public text: string,
        public date: Date,
        public priority: string = 'Low',
        public completed: boolean = false
    ) { }
}