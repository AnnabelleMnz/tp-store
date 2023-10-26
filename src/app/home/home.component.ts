import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Welcome to the STORE</span>
      <button mat-raised-button color="primary" routerLink="/manager">Login as manager</button>
    </div>
  `,
  styles: [`
    div[fxLayout] {margin-top: 32px}
    `
  ]
})
export class HomeComponent {

}
