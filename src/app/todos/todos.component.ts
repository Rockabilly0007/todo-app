import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    todos: Todo[]
    showValidationErrors: boolean = false
    selectedPriority: string = 'all';
    filteredItems: any[];

    constructor(
        private dataService: DataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.todos = this.dataService.getAllTodos()
    }

    onFormSubmit(form: NgForm) {   
       //console.log(form.value);
        if (form.invalid) {
            return this.showValidationErrors = true
        }
         
        this.dataService.addTodo(new Todo(form.value.text, form.value.date, form.value.priority));
        
        this.showValidationErrors = false
        form.reset()
    }

    toggleCompleted(todo: Todo) {
        todo.completed = !todo.completed;
    }

    editTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);

        let dialogRef = this.dialog.open(EditTodoDialogComponent, {
            width: '600px',
            data: todo
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.dataService.updateTodo(index, result)
            }
        })
    }

    deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo)
        this.dataService.deleteTodo(index);
    }

    filterByPriority() {
        if (this.selectedPriority === 'all') {
          this.todos = this.dataService.getAllTodos();
        } else {
          this.todos = this.dataService.getAllTodos().filter(todo => todo.priority === this.selectedPriority);
        }
    }

}
