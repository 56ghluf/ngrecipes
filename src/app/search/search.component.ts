import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ResultslistComponent } from '../resultslist/resultslist.component';


@Component({
  selector: 'app-search',
  imports: [SearchbarComponent, ResultslistComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  recipeUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  searchResults: { [id: string]: string; }[] = [];
  ingredients: { [id: string]: string; }[] = [];

  async searchRecipe(event: string) {
    await fetch(
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
        this.searchResults = data["meals"];

        if (this.searchResults[0]["strIngredients1"] == undefined) {
          return;
        }

        for (let i = 0; i < this.searchResults.length; i++) {
          this.searchResults[i]["expanded"] = "no";

          for (let j = 1; j < 21; i++) {
            if (this.searchResults[i]["strIngredient" + j.toString()] == "") {
              break;
            }

            this.ingredients.push({
              "test": this.searchResults[i]["strMeasure" + j.toString()],
            });
          }
        }
      }
    )
  }
}
