import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { LowerCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    todos: Todo[] = [ 
        new Todo('This is an example!', new Date,'High'),
        new Todo('Another example, like wash your car.', new Date, 'Medium')
    ]

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
