import { Component, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './page/home.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    RouterModule,
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="row">
      <div class="col-12">
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styles: [``],
})
export class AppComponent {}
