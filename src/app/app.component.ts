import { Component, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { Route } from './app-routing-decorator.module';
import { HomeComponent } from './page/home.component';
import { AboutComponent } from './page/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
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
  loadComponent: () => import('./page/feature.component').then(
    m => m.FeatureComponent
  ),
})
@Route({
  path: 'users',
  loadComponent: () => import('./page/users.component').then(
    m => m.UsersComponent
  ),
})
export class AppComponent {}
