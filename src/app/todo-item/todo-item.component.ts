import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import tippy from 'tippy.js'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    @Input()todo: Todo;
    @Output() todoClicked: EventEmitter<void> = new EventEmitter();
    @Output() editClicked: EventEmitter<void> = new EventEmitter();
    @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { 
    }

    onTodoClicked() {
        this.todoClicked.emit()
    }

    onEdit() {
        this.editClicked.emit();
    }

    onDelete() {
        this.deleteClicked.emit();
    }
}
