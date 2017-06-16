import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "app/shared/ingredient.model";
import {ShoppingListService} from "../shoppinglist.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  add() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amtName = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amtName);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
