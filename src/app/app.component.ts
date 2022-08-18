import { Component, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { Route } from './app-routing-decorator.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './page/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    HomeComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`,
})
@Route({
  path: 'features',
  providers: [
    importProvidersFrom(
      BsDatepickerModule.forRoot(),
    ),
  ],
  loadComponent: () => import('./page/feature.component').then(
    m => m.FeatureComponent
  ),
})
export class AppComponent {}
