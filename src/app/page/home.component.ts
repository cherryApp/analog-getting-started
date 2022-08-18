import { Component, OnInit } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BsDatepickerModule,
  ],
  template: `
    <div class="row">
      <div class="col-xs-12 col-12 col-md-4 form-group mb-3">
        <input type="text"
              placeholder="Datepicker"
              class="form-control"
              bsDatepicker>
      </div>
      <div class="col-xs-12 col-12 col-md-4 form-group mb-3">
        <input type="text"
              placeholder="Daterangepicker"
              class="form-control"
              bsDaterangepicker>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
