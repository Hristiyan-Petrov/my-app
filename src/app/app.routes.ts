import { Routes } from '@angular/router';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeList } from './recipe-list/recipe-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipeList
    },
    {
        path: 'recipes/:recipeId',
        component: RecipeDetail
    },
];
