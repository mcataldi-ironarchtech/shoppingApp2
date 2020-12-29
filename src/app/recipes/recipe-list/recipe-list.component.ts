import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { 
    this.loadRecipes();
  }

  ngOnInit(): void {
  }

  loadRecipes(): void {
    this.recipes.push(new Recipe('Cake', 'It is a yummy cake.', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-600x900.jpg'));
    this.recipes.push(new Recipe('Pot Roast', 'It awesome Potroast!', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/1/25/0/WU0105H_Pot-Roast_s4x3.jpg.rend.hgtvcom.686.515.suffix/1387299383780.jpeg'));
    this.recipes.push(new Recipe('Popcorn', 'It great.', 'https://www.simplyrecipes.com/wp-content/uploads/2015/01/perfect-popcorn-vertical-a-1800-600x900.jpg'));
  }
}
