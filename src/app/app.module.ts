import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeBookComponent } from './recipes/recipe-book/recipe-book.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {RecipeDetailComponent} from "./recipes/recipe-book/recipe-detail/recipe-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipesComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
