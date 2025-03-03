import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">Lab6</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" routerLink="/home">Home</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/albums">Albums</a></li>
      </ul>
    </nav>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}