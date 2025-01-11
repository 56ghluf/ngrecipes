import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultslist',
  imports: [],
  templateUrl: './resultslist.component.html',
  styleUrl: './resultslist.component.css'
})
export class ResultslistComponent {
  @Input() results: {[id: string]: string}[] = [];
  @Input() ingredients: { [id: string]: string; }[] = [];

  flipExpanded(index: number) {
    console.log("The number has been clicked.");
    this.results[index]["expanded"] = this.results[index]["expanded"] == "no" ? "yes" : "no";
  }
}
