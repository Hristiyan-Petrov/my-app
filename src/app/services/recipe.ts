import { computed, Injectable, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  private readonly mockRecipesSignal = signal<RecipeModel[]>(MOCK_RECIPES);
  public readonly recipes = computed(() => this.mockRecipesSignal());
}
