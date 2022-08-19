import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  template: `
    <p>UsersComponent works!</p>
  `,
  styles: [``]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
