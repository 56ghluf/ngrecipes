import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  template: `
    <h1 id="title">Your recipe book!</h1>
    <h3 id="subtitle">Just search for what you are hungry for</h3> 
    <app-search></app-search>
  `,
  styleUrl: './app.component.css',
  imports: [SearchComponent],
})
export class AppComponent {
  title = 'recipes';
}
