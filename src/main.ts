import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SidebarComponent } from './app/core/components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './app/core/components/shared/header/header.component';
import { RouterModule } from '@angular/router';
import { appConfig } from './app/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[SidebarComponent,HeaderComponent,RouterModule],
  template: `
  <div class="flex h-screen">
  <app-header class="w-30"></app-header>
  <div class="flex-1 flex flex-col">
    <main class="flex-1 p-4 bg-gray-100">
      <router-outlet></router-outlet>
    </main>
  </div>
  <app-sidebar class="w-64"></app-sidebar>
</div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,appConfig);
