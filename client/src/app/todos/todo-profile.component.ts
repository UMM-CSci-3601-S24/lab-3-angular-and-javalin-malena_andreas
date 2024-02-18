//import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, map, switchMap, takeUntil } from 'rxjs';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoCardComponent } from './todo-card.component';
//import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todo-profile',
  standalone: true,
  imports: [TodoListComponent, MatCardModule, TodoCardComponent],
  templateUrl: './todo-profile.component.html',
  styleUrl: './todo-profile.component.scss'
})
export class TodoProfileComponent implements OnInit, OnDestroy{
  todo: Todo;
  error: { help: string, httpResponse: string, message: string }

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id')),
      switchMap((id: string) => this.todoService.getTodoById(id)),
      takeUntil(this.ngUnsubscribe)
    ).subscribe({
      next: todo => {
        this.todo = todo;
        return todo;
      },
      error: _err => {
        this.error = {
          help: 'Error fetching todo',
          httpResponse: _err.message,
          message: _err.error?.title,
        };
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
