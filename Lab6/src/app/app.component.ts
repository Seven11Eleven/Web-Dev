import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/albums">Albums</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
