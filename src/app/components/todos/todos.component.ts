
import { Component, OnInit} from '@angular/core';

import { Todo } from '../../models/todo'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    this.todoService.getTodosFirestore().subscribe(todos => (this.todos = todos));
  }

  add(title: string, description: string, completed: boolean): void {
    title = title.trim();
    description = description.trim();
    if (!title || !description) {
      return;
    }
    this.todoService.addTodoFirestore({ title, description, completed } as Todo)
  }

  delete(todo: Todo): void {
    this.todoService.deleteTodoFirestore(todo);
  }

}
