import { Injectable } from '@angular/core';

import { Todo } from '../models/todo'

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private firestoreDatabase: AngularFirestore) { }

  getTodosFirestore() {
    return this.firestoreDatabase.collection("todos").snapshotChanges();
  }

  getTodoFirestore(id: string){
    return this.firestoreDatabase.collection("todos").doc(id).valueChanges();
  }

  getTodosWorkInProgressFirestore(){
    return this.firestoreDatabase.collection("todos", ref => ref.where('completed', '==', false)).snapshotChanges();
  }

  addTodoFirestore(todo: Todo) {
    return new Promise<void>((reject) => {
      this.firestoreDatabase
          .collection("todos")
          .add(todo)
          .then(_res => {}, error => reject(error))
    });
  }

  deleteTodoFirestore(todo: any){
    return this.firestoreDatabase
          .collection("todos")
          .doc(todo.payload.doc.id)
          .delete();
  }

  updateTodoFirestore(id: string, todo: any){
    return this.firestoreDatabase
          .collection("todos")
          .doc(id)
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
