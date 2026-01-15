import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  readonly currentRecipeChild = input.required<RecipeModel>();

  // Computed signal
  protected readonly computedIngredients = computed(() =>
    this.currentRecipeChild().ingredients.map(x => ({
      ...x,
      quantity: x.quantity * this.servingsCount(),
    })));

  // Servings count
  protected readonly servingsCount = signal<number>(1);

  protected incrementServingsCount(): void {
    this.servingsCount.update(prev => prev + 1);
  };

  protected decrementServingCount(): void {
    this.servingsCount.update(prev => prev > 1 ? prev - 1 : prev);
  };
}
