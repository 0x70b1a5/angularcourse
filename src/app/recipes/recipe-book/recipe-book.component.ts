import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "nurple's purple durps",
      "make 10 chirps then flirp a perp",
      "https://pbs.twimg.com/media/DCJztZwVoAA7tCx.jpg"
    )
  ]


  constructor() { }

  ngOnInit() {
  }

}
