import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})

export class SearchbarComponent {
  @Output() submitEvent = new EventEmitter<string>();

  onSubmit(event: any) {
    event.preventDefault();
    this.submitEvent.emit(event.target.query.value);
  }
}
