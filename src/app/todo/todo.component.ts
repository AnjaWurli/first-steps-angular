import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  hideTxt: boolean = false;

  todos: { text: string; id: number; done: boolean }[] = [
    { text: 'Pepperoni', id: 1, done: true },
    { text: 'Extra Cheese', id: 2, done: false },
  ];

  whichTodos: string = 'all';
  filteredTodos: { text: string; id: number; done: boolean }[] = this.todos;

  addTodo(addTodoTxt: NgForm) {
    console.log(addTodoTxt);
    let newTodo = {
      text: addTodoTxt.value.add,
      id: this.todos.length + 1,
      done: false,
    };
    if (addTodoTxt.value.add.length >= 5) {
      this.todos.push(newTodo);
      addTodoTxt.resetForm();
    }
  }

  deleteTodos() {
    this.todos.forEach((doneTodo, i) => {
      if (doneTodo.done) {
        this.todos.splice(i, 1);
      }
    });
    this.whichTodos = 'all';
    this.sortTodo(this.whichTodos);
  }

  sortTodo(whichTodos: string) {
    console.log(whichTodos);
    if (whichTodos === 'all') {
      this.filteredTodos = this.todos;
    } else if (whichTodos === 'open') {
      this.filteredTodos = this.todos.filter((todo) => todo.done === false);
    } else if (whichTodos === 'done') {
      this.filteredTodos = this.todos.filter((todo) => todo.done === true);
    }
  }

  countTodos(done: boolean) {
    let counter = 0;
    this.todos.forEach((todo) => {
      return todo.done === done ? counter++ : counter;
    });
    return counter;
  }
}
