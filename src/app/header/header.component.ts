import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private recipeService: RecipeService) { }

  onSaveRecipe() {
    this.recipeService.saveRecipes();
  }

  onFetchRecipe() {
    this.recipeService.fetchRecipe();
  }
}
