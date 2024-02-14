import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list.component';
import { UserProfileComponent } from './users/user-profile.component';
import { TodoListComponent } from './todos/todo-list.component';
import { TodoProfileComponent } from './todos/todo-profile.component';
import { TodoCardComponent } from './todos/todo-card.component';


const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home'},
  {path: 'users', component: UserListComponent, title: 'Users'},
  {path: 'users/:id', component: UserProfileComponent, title: 'User Profile'},
  {path: 'todos', component: TodoListComponent, title: 'Todos'},
  {path: 'todos/:id', component: TodoProfileComponent, title: 'Todo Details'},
  {path: 'todos/', component: TodoCardComponent, title: 'Todo Details'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
