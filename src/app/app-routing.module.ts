import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodosComponent } from './components/todos/todos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent},
  { path: 'details/:id', component: TodoDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
