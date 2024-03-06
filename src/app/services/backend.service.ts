import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  randomCocktailSubject = new BehaviorSubject<Cocktail>(new Cocktail('','','','','','','','','',''));

  randomCocktail = this.randomCocktailSubject.asObservable();

  cocktailsByLetterRaw: Cocktail[] = []; // where we store all cocktails from the DB

  // a behavior subject maintains a sttate and notifies an obervable when it has changed
  cocktailsByLetterSubject = new BehaviorSubject<Cocktail[]>([]);

  // creating an observable to notify subscribers that our subject has undergone a change
  cocktailsByLetter = this.cocktailsByLetterSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAllCocktailsByLetter('g')
  }

getAllCocktailsByLetter(letter: String) {
  // takes in a URL and an observable type
  this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter, { observe: 'response' }).subscribe(data=> {

    // cleaning out the raw array to prevent duplicates
    this.cocktailsByLetterRaw = [];

    // looping through the data and adding each cocktail to the raw array
    for (let cocktail of data.body.drinks ) {
      this.cocktailsByLetterRaw.push(new Cocktail(cocktail.idDrink,
                                                  cocktail.strDrink,
                                                  cocktail.strAlcoholic,
                                                  cocktail.strDrinkThumb,
                                                  cocktail.strGlass,
                                                  cocktail.strIngredient1,
                                                  cocktail.strIngredient2,
                                                  cocktail.strIngredient3,
                                                  cocktail.strIngredient4,
                                                  cocktail.strInstructions));
    }

    this.cocktailsByLetterSubject.next(this.cocktailsByLetterRaw)
    
  });
}

getRandomCocktail() {
  this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/random.php', { observe : 'response' }).subscribe(data => {
    this.randomCocktailSubject.next(new Cocktail(
                                      data.body.drinks[0].idDrink,
                                      data.body.drinks[0].strDrink,
                                      data.body.drinks[0].strAlcoholic,
                                      data.body.drinks[0].strDrinkThumb,
                                      data.body.drinks[0].strGlass,
                                      data.body.drinks[0].strIngredient1,
                                      data.body.drinks[0].strIngredient2,
                                      data.body.drinks[0].strIngredient3,
                                      data.body.drinks[0].strIngredient4,
                                      data.body.drinks[0].strInstructions,
                                      ))
  })
}
  
}
