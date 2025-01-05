import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Your recipe book!</h1>
    <h2>Just search for what you are hungry for!</h2> 
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes';
}
