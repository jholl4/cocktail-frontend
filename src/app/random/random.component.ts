import { Component } from '@angular/core';
import { Cocktail } from '../model/cocktail';
import { BackendService } from '../services/backend.service';
import { CocktailComponent } from "../cocktail/cocktail.component";

@Component({
    selector: 'app-random',
    standalone: true,
    templateUrl: './random.component.html',
    styleUrl: './random.component.css',
    imports: [CocktailComponent]
})
export class RandomComponent {

  randomCocktail: Cocktail = new Cocktail('','','','','','','','','','',);

  constructor(private backend: BackendService) {

    this.backend.getRandomCocktail();

    this.backend.randomCocktail.subscribe(data => {

    this.randomCocktail = data;

    });

  }

}
