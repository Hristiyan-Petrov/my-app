import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly pageTitle = signal<string>('My Recipe Box');

  protected viewRecipeClick() {
    console.log('View recipe button clicked!');
  }

  protected addToFavoritesClick() {
    console.log('Add to favorites button clicked')
  }
}
