import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { Cocktail } from '../model/cocktail';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [FormsModule, CocktailComponent, CommonModule]
})
export class FormComponent {

  cocktail: Cocktail = new Cocktail('','','','','','','','','','',)

  strDrink: string = "";
  strGlass: string = "";
  strAlcoholic: string = "";
  strDrinkThumb: string = "";

  populateCocktailComponent() {
    this.cocktail.strDrink = this.strDrink;
    this.cocktail.strGlass = this.strGlass;
    this.cocktail.strAlcoholic = this.strAlcoholic;
    this.cocktail.strDrinkThumb = this.strDrinkThumb
  }
}
