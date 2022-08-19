import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { Route } from '../app-routing-decorator.module';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [
    FormsModule,
    BsDatepickerModule,
    TimepickerModule,
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
    <div class="row">
      <div class="col-12">
        <timepicker [(ngModel)]="mytime"></timepicker>
        <pre class="alert alert-info">Time is: {{mytime}}</pre>
      </div>
    </div>
  `,
  styles: [
  ]
})
@Route({path: 'features'})
export class FeatureComponent implements OnInit {

  mytime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
