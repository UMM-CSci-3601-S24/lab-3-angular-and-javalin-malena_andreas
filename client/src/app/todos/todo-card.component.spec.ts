import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoCardComponent } from './todo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

describe('TodoCardComponent', () => {
  let component: TodoCardComponent;
  let fixture: ComponentFixture<TodoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        BrowserAnimationsModule,
        MatCardModule,
        TodoCardComponent
    ]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardComponent);
    component = fixture.componentInstance;
    component.todo = {
    _id: "58895985a22c04e761776d54",
    owner: "Blanche",
    status: false,
    body: "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
    category: "software design",
    sortBy: "owner"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
