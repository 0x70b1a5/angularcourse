import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() showRecipeBook = true;
  @Input() showShoppingList = true;

  onNavEvent(e: {recipeBook: boolean, shoppingList: boolean}) {
    console.log(e)
    this.showRecipeBook = e.recipeBook;
    this.showShoppingList = e.shoppingList;
  }
}
