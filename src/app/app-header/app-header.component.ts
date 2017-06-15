import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Output() navigator = new EventEmitter<{recipeBook: boolean, shoppingList: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  clickMainLink() {
    this.navigator.emit({
      recipeBook: true,
      shoppingList: true
    })
  }

  clickRBLink() {
    this.navigator.emit({
      recipeBook: true,
      shoppingList: false
    })
  }

  clickSLLink() {
    this.navigator.emit({
      recipeBook: false,
      shoppingList: true
    })
  }
}
