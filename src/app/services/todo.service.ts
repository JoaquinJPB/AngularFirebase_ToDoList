import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Todo } from '../models/todo'

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todosUrl = 'api/todos';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET todos from the server */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  /** GET todo by id. Will 404 if id not found */
  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  searchTodos(term: string): Observable<Todo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Todo[]>(`${this.todosUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Todo[]>('searchHeroes', []))
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  deleteTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }

}
