
/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
//import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
//import { ActivatedRoute } from '@angular/router';
//import { TodoService } from './todo.service';
//import { of } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './todo.service';
import { of } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  const todoId = 'todo_id';
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub({
    id: todoId
  });
  const stubTodoService = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getTodoById: (id) => {
      return of({
        id: todoId,
        owner: 'Blanche',
        status: false,
        body: 'In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.'
      });
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: TodoService, useValue: stubTodoService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
