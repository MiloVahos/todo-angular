import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToDo } from './models/todo';
import { STATUS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),
    ])
  ]
})
export class AppComponent {

  title = 'ToDo';
  desc: string = '';
  todos: ToDo[] = [];
  todoID: number = 0;

  constructor() { }

  addTodo(): void {
    if (this.desc.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.todoID,
      desc: this.desc,
      date: new Date(),
      status: STATUS.ACTIVE,
    });
    this.desc = '';
    this.todoID++;
    console.log(this.todos);
  }

  completeTodo(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].status = STATUS.DONE;
    console.log(this.todos);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(this.todos);
  }

}
