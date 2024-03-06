import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../model/cocktail';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent {

  // input receives data from the parent component
  @Input() cocktail: Cocktail = new Cocktail('','','','','','','','','','')

  @Output() deleteCocktailEvent = new EventEmitter<Cocktail>();

  // emit an event when the user clicks X in the component
  emitDeleteCocktailEvent() {
    this.deleteCocktailEvent.emit(this.cocktail);
  }

}
