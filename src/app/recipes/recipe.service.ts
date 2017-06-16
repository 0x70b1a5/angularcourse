import {Recipe} from "app/recipes/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "app/shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppinglist.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "nurple's purple durps",
      "make 10 chirps then flirp a perp",
      "https://pbs.twimg.com/media/DCJztZwVoAA7tCx.jpg",
      [
        new Ingredient('morp', 2),
        new Ingredient('borp', 4),
        new Ingredient('dorp', 8)
      ]
    ),
    new Recipe(
      "scream",
      "yelling",
      "https://pbs.twimg.com/media/DCJztZwVoAA7tCx.jpg",
      [
        new Ingredient('urg', 2),
        new Ingredient('burg', 4),
        new Ingredient('durg', 8)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngsToSList(is: Ingredient[]) {
    this.slService.addIngredients(is);
  }
}
