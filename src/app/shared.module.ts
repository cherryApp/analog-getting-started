import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const rootModule = BsDatepickerModule.forRoot();

@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
  ],
})
export class SharedModule { }
