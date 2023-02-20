import { Component } from '@angular/core';
import { TodoItem, TODO_ITEMS } from '../mocked-data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newItem: string = "Nowy element";
  todoItems: TodoItem[] = TODO_ITEMS;


  addItem(): void{
    this.todoItems.push({text: this.newItem, check: false});
    this.newItem = "";
  }

  removeItem(event: TodoItem): void {
    this.todoItems = this.todoItems.filter(item => item.text !== event.text);
  }

  sortList(): void{
    
    this.todoItems = this.todoItems.sort(function (a, b) {
      if (a.text.toLowerCase() < b.text.toLowerCase()) {
        return -1;
      }
      if (a.text.toLowerCase() > b.text.toLowerCase()) {
        return 1;
      }
      return 0;
    });;
  }

  change(item: TodoItem): void{
    item.check = !item.check;
  }

}
