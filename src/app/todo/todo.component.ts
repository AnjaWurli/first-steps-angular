import { Component } from '@angular/core';

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

  addTodo(e: any, wantTodo: string) {
    e.preventDefault();
    let newTodo = { text: wantTodo, id: this.todos.length + 1, done: false };
    if (wantTodo.length >= 5) {
      this.todos.push(newTodo);
    }
  }

  deleteTodos() {
    this.todos.forEach((doneTodo, i) => {
      if (doneTodo.done) {
        this.todos.splice(i, 1);
      }
    });
  }
}
