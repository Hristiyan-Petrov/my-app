import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
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
    
}
