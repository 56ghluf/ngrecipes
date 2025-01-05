import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Your recipe book!</h1>
    <h3>Just search for what you are hungry for</h3> 
    <app-searchbar>
  `,
  styleUrl: './app.component.css',
  imports: [SearchbarComponent],
})
export class AppComponent {
  title = 'recipes';
}
