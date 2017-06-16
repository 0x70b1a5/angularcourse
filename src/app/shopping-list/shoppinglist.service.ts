import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("butt", 1),
    new Ingredient("noodle", 1)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(is: Ingredient[]) {
    this.ingredients.push(...is);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  removeIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
