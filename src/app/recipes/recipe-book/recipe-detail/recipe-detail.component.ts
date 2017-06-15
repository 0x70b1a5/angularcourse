import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Output() recipeEvent = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeEvent.emit()
  }
}
