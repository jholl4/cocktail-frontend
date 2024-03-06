import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Cocktail } from '../model/cocktail';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from "../cocktail/cocktail.component";
import { FormsModule } from '@angular/forms';
import { DataTransferService } from '../services/data-transfer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cocktails',
    standalone: true,
    templateUrl: './cocktails.component.html',
    styleUrl: './cocktails.component.css',
    imports: [CommonModule, CocktailComponent, FormsModule]
})
export class CocktailsComponent {

  cocktails: Cocktail[] = [];

  // toggle variable for table/grid view
  isTable: boolean = true;

  // holder variable for search letter
  searchLetter: string = "";

  constructor(private backend: BackendService,
                      private dt: DataTransferService,
                      private router: Router) {

    this.backend.cocktailsByLetter.subscribe(data => {
      this.cocktails = data;
      console.log(this.cocktails);

    })

  }

  // toggles the isTable boolean when you click the button
  viewToggle() {
    this.isTable = !this.isTable;
  }

  // removes a cocktail from the array when clicking table row X
  removeCocktailTable(idDrink: string){
    for(let cocktail of this.cocktails){
      if(cocktail.idDrink === idDrink){
        this.cocktails.splice(this.cocktails.indexOf(cocktail), 1);
      }
    }
  }

  removeCocktailGrid(cocktail: Cocktail, index: number){
    console.log(cocktail)
    this.cocktails.splice(index);
  }

  updateLetter(){
    this.backend.getAllCocktailsByLetter(this.searchLetter);
  }

  // calling to our data transfer service to update favorite
  updateFavorite(favoriteDrink: string) {
    this.dt.updateFavoriteDrink(favoriteDrink)
  }

  random() {
    this.backend.getRandomCocktail();
    this.router.navigate(['random'])
  }

}
