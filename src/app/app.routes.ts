import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AddEditTodoComponent } from './todo/views/add.edit.todo.component';
import { TodoViewComponent } from './todo/views/todo.view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: 'home',
        component: TodoViewComponent,
      },
      {
        path: 'new',
        component: AddEditTodoComponent,
      },
      { path: '', redirectTo: '/todo/home', pathMatch: 'full' },
    ],
  },
];
