import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

export const routes: Routes = [
  {
    path: '',
    providers: [
      importProvidersFrom(
        BsDatepickerModule.forRoot(),
      ),
    ],
    loadComponent: () => import('./page/home.component').then(
      m => m.HomeComponent
    ),
  }
];
