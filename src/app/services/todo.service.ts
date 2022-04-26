import { Injectable } from '@angular/core';

import { Todo } from '../models/todo'

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private firestoreDatabase: AngularFirestore) { }

  getTodos() {
    return this.firestoreDatabase.collection("todos").snapshotChanges();
  }

  getTodo(id: number){
    console.log(id)
    
  }

  addTodo(todo: Todo) {
    return new Promise<void>((resolve, reject) => {
      this.firestoreDatabase
          .collection("todos")
          .add(todo)
          .then( res => {}, error => reject(error))
    });
  }

  deleteTodo(todo: any){
    return this.firestoreDatabase
          .collection("todos")
          .doc(todo.payload.doc.id)
          .delete();
  }

  updateTodo(todo: any){
    return this.firestoreDatabase
          .collection("todos")
          .doc(todo.id)
          .set({
            title: todo.title,
            description: todo.description,
            completed: todo.completed
          },
          {
            merge: true
          });
  }

}
