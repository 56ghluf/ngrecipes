import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultslist',
  imports: [],
  templateUrl: './resultslist.component.html',
  styleUrl: './resultslist.component.css'
})
export class ResultslistComponent {
  @Input() results: {[id: string]: string}[] = [];
  ingredientIndicies: { [id: number]: string[] } = {};
  quantityIndicies: { [id: number]: string[] } = {};

  flipExpanded(index: number) {
    this.results[index]["expanded"] = this.results[index]["expanded"] == "no" ? "yes" : "no";
    this.getIngredientIndicies(index);
  }

  getIngredientIndicies(index: number) {
    this.ingredientIndicies[index] = [];
    this.quantityIndicies[index] = [];
    for (let i = 1; 1 < 21; i++) {
      if (this.results[index]["strIngredient" + i.toString()].length > 0) {
        this.ingredientIndicies[index].push("strIngredient" + i.toString());
        this.quantityIndicies[index].push("strMeasure" + i.toString());
      } else {
        break;
      }
    }
  }
}
