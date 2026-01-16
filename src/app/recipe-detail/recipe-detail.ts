import { Component, computed, inject, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Recipe } from '../services/recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [JsonPipe],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {

  protected route = inject(ActivatedRoute);
  readonly recipeId = input.required<string>();

  private readonly recipeService = inject(Recipe);

  protected recipe = computed(() => {
    return this.recipeService
      .recipes()
      .find(x => x.id === Number(this.recipeId()))
  });

  // readonly currentRecipeChild = input.required<RecipeModel>();

  // Servings count
  protected readonly servingsCount = signal<number>(1);

  protected incrementServingsCount(): void {
    this.servingsCount.update(prev => prev + 1);
  };

  protected decrementServingCount(): void {
    this.servingsCount.update(prev => prev > 1 ? prev - 1 : prev);
  };

  // Computed signal
  protected readonly computedIngredients = computed(() =>
    this.recipe()?.ingredients.map(x => ({
      ...x,
      quantity: x.quantity * this.servingsCount(),
    })));
}
