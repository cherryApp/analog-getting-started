import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    FormsModule,
    TimepickerModule,
  ],
  template: `
    <timepicker [(ngModel)]="mytime"></timepicker>
    <pre class="alert alert-info">Time is: {{mytime}}</pre>
  `,
  styles: [``]
})
export class UsersComponent implements OnInit {

  mytime: Date = new Date(2019, 4, 20);

  constructor() { }

  ngOnInit(): void {
  }

}
