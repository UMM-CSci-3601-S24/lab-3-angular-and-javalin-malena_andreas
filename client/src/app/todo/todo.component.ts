import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardSubtitle } from '@angular/material/card';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardSubtitle],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todo = {
  "_id": "58895985a22c04e761776d54",
  "owner": "Blanche",
  "status": false,
  "body": "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
  "category": "software design"
  };
}
