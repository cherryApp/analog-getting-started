import { Component, OnInit } from '@angular/core';
import { Route } from '../app-routing-decorator.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <p>AboutComponent works!</p>
  `,
  styles: [``]
})
@Route({path: 'about'})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
