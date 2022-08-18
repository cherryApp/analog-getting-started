import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Route } from '../app-routing-decorator.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BsDatepickerModule,
  ],
  template: `
    <p>Home Component Works!</p>
  `,
  styles: [
  ]
})
@Route({path: ''})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
