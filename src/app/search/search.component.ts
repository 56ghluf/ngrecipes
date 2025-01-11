import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-search',
  imports: [SearchbarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  recipeUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  searchResults = [];

  searchRecipe(event: string) {
    console.log(this.recipeUrl + event);
    fetch(
      this.recipeUrl + event,
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    ).then(
      res => res.json()
    ).then(
      data => {
        this.searchResults = data;
      }
    )
    console.log(this.searchResults);
    }
}
