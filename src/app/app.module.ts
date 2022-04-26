import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailsComponent,
    DashboardComponent,
    TodoSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
