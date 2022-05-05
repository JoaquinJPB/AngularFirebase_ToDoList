import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {

  todo: any;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }
  
  getTodo(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.id = id;
    this.todoService.getTodoFirestore(id).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todo) {
      this.todoService.updateTodoFirestore(this.id, this.todo);
      this.goBack();
    }

  }
  
}
