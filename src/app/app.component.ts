import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Your recipe book!</h1>
    <h3>Just search for what you are hungry for</h3> 
    <app-search></app-search>
  `,
  styleUrl: './app.component.css',
  imports: [SearchComponent],
})
export class AppComponent {
  title = 'recipes';
}
