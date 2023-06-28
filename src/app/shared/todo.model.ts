export class Todo {

    constructor(
        public text: string,
        public date: Date,
        public priority: string = 'Low',
        public completed: boolean = false
    ) { }
}