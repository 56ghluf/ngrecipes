import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  onSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.query.value);
  }
}
