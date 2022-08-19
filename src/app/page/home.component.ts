import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Route } from '../app-routing-decorator.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
