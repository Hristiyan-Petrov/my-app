import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { FormsModule } from '@angular/forms';
import { Recipe } from '../services/recipe';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-recipe-list',
    imports: [RecipeDetail, FormsModule, RouterLink],
    templateUrl: './recipe-list.html',
    styleUrl: './recipe-list.css',
})
export class RecipeList {
    protected readonly pageTitle = signal<string>('My Recipe Box');

    private readonly recipeService = inject(Recipe);
    private readonly recipes = this.recipeService.recipes;
 
    // Current recipe
    // recipesIndex = 0;
    
    // protected readonly currentRecipe = signal<RecipeModel>(this.recipes()[this.recipesIndex]);

    // protected swapRecipe(): void {
    //     this.recipesIndex = (this.recipesIndex + 1) % this.recipes.length;
    //     this.currentRecipe.set(this.recipes()[this.recipesIndex]);
    // };

    // protected selectRecipe(recipeName: RecipeModel): void {
    //     this.currentRecipe.set(recipeName);
    // };

    // Search Input
    protected readonly searchTerm = signal<string>('');
    protected readonly filteredRecipes = computed(() => {
        return this.recipes().filter(x => x.name
            .toLowerCase()
            .includes(this.searchTerm().toLowerCase()))
    });

}

