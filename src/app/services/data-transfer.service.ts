import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  // favoriteDrink: string = "";
  favoriteDrinkSubject = new BehaviorSubject<string>('');
  favoriteDrink = this.favoriteDrinkSubject.asObservable();
  
  constructor() { }

  updateFavoriteDrink(favoriteDrink: string) {
    this.favoriteDrinkSubject.next(favoriteDrink);
  }
}
