import { Component, OnDestroy, OnInit } from '@angular/core';
//import { MatCard, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { Todo } from './todo';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
//import { Subject, map, switchMap, takeUntil } from 'rxjs';
import { TodoService } from './todo.service';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, map, switchMap, takeUntil } from 'rxjs';
//import { RouterLink } from '@angular/router';
//import { MatNavList, MatListSubheaderCssMatStyler, MatListItem, MatListItemAvatar, MatListItemTitle, MatListItemLine } from '@angular/material/list';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatNavList } from '@angular/material/list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatFormField, MatHint, MatLabel, MatInput, MatNavList, RouterLink, MatError, FormsModule, MatCardActions, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})


export class TodoComponent implements OnInit, OnDestroy{
  todo: Todo;
  error: { help: string, httpResponse: string, message: string }

  public serverFilteredTodos: Todo[];
  public filteredTodos: Todo[];

  public todoOwner: string;
  public todoStatus: boolean;
  public todoBody: string;
  public todoCategory: string;

  // start of todo code
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private snackBar: MatSnackBar) {}

    getTodosFromServer() {
      // A user-list-component is paying attention to userService.getUsers()
      // (which is an Observable<User[]>).
      // (For more on Observable, see: https://reactivex.io/documentation/observable.html)
      this.todoService.getTodos({
        // Filter the users by the role and age specified in the GUI
        owner: this.todoOwner,
        category: this.todoCategory
      }).pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe({
        // Next time we see a change in the Observable<User[]>,
        // refer to that User[] as returnedUsers here and do the steps in the {}
        next: (returnedTodos) => {
          // First, update the array of serverFilteredUsers to be the User[] in the observable
          this.serverFilteredTodos = returnedTodos;
          // Then update the filters for our client-side filtering as described in this method
          this.updateFilter();
        },
        // If we observe an error in that Observable, put that message in a snackbar so we can learn more
        /*error: (err) => {
          if (err.error instanceof ErrorEvent) {
            this.errMsg = `Problem in the client – Error: ${err.error.message}`;
          } else {
            this.errMsg = `Problem contacting the server – Error Code: ${err.status}\nMessage: ${err.message}`;
          }
        },*/
      })
    }

    public updateFilter() {
      this.filteredTodos = this.todoService.filterTodos(
        this.serverFilteredTodos, { owner: this.todoOwner, category: this.todoCategory }
      );
    }




  ngOnInit(): void {

    this.getTodosFromServer();
    // The `map`, `switchMap`, and `takeUntil` are all RXJS operators, and
    // The result from the map step is the `id` string for the requested
    // operator.
    // The map step takes the `ParamMap` from the `ActivatedRoute`, which
    // it into an Observable<User>, i.e., all the (zero or one) `User`s
    // each represents a step in the pipeline built using the RXJS `pipe`
    // is typically the URL in the browser bar.
    // `User`.
    // That ID string gets passed (by `pipe`) to `switchMap`, which transforms
    // that have that ID.
    // The `takeUntil` operator allows this pipeline to continue to emit values
    // down and clean up any associated resources (like memory).
    // until `this.ngUnsubscribe` emits a value, saying to shut the pipeline
    this.route.paramMap.pipe(
      // Map the paramMap into the id
      map((paramMap: ParamMap) => paramMap.get('id')),
      // Maps the `id` string into the Observable<User>,
      // which will emit zero or one values depending on whether there is a
      // `User` with that ID.
      switchMap((id: string) => this.todoService.getTodoById(id)),
      // Allow the pipeline to continue to emit values until `this.ngUnsubscribe`
      // returns a value, which only happens when this component is destroyed.
      // At that point we shut down the pipeline, allowed any
      // associated resources (like memory) are cleaned up.
      takeUntil(this.ngUnsubscribe)
    ).subscribe({
      next: todo => this.todo = todo,
      error: _err => {
        this.error = {
          help: 'There was a problem loading the user – try again.',
          httpResponse: _err.message,
          message: _err.error?.title,
        };
      }
      /*
       * You can uncomment the line that starts with `complete` below to use that console message
       * as a way of verifying that this subscription is completing.
       * We removed it since we were not doing anything interesting on completion
       * and didn't want to clutter the console log
       */
      // complete: () => console.log('We got a new user, and we are done!'),
    });
  }

  ngOnDestroy() {
    // When the component is destroyed, we'll emit an empty
    // value as a way of saying that any active subscriptions should
    // shut themselves down so the system can free up any associated
    // resources, like memory.
    this.ngUnsubscribe.next();
    // Calling `complete()` says that this `Subject` is done and will
    // never send any further values.
    this.ngUnsubscribe.complete();
  }
}
