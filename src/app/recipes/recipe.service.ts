import {Recipe} from "app/recipes/recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "nurple's purple durps",
      "make 10 chirps then flirp a perp",
      "https://pbs.twimg.com/media/DCJztZwVoAA7tCx.jpg"
    ),
    new Recipe(
      "scream",
      "yelling",
      "https://pbs.twimg.com/media/DCJztZwVoAA7tCx.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
