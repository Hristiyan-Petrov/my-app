import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, JsonPipe],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly pageTitle = signal<string>('My Recipe Box');

    // Current recipe
    recipesIndex = 0;
    protected readonly currentRecipe = signal<RecipeModel>(MOCK_RECIPES[this.recipesIndex]);

    protected swapRecipe(): void {
        // if (!MOCK_RECIPES[this.recipesIndex + 1]) {
        //     this.recipesIndex = 0
        // } else {
        //     this.recipesIndex = this.recipesIndex + 1;
        // }

        this.recipesIndex = (this.recipesIndex + 1) % MOCK_RECIPES.length;
        this.currentRecipe.set(MOCK_RECIPES[this.recipesIndex]);
    };

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
        this.currentRecipe().ingredients.map(x => ({
            ...x,
            quantity: x.quantity * this.servingsCount(),
        })));
}