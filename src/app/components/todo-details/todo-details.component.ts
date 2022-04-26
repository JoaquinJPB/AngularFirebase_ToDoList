import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {

  @Input() todo?: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }
  
  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todo) {
      this.todoService.updateTodo(this.todo)
        .subscribe(() => this.goBack());
    }
  }
  
}
