import { Component } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  favoriteDrink: string = '';

  constructor(private dt: DataTransferService) {
    this.dt.favoriteDrink.subscribe(data => {
      this.favoriteDrink = data;
    })
  }

  deleteFavorite(){
    this.dt.updateFavoriteDrink('');
  }

}
