import { Component } from '@angular/core';
import { Meal } from './meal-tracker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mealList: Meal [] = [
    new Meal('Kure Drink', 'Strawberry Delight with extra berries. Next time no ice, extra greens', 117),
    new Meal('Pad Thai', 'No meat, side of peanut sauce, extra veggies', 940),
    new Meal('Pho Soup', 'Veggie broth with no meat. Extra veggies. Side of salad roles', 367)];

    addMeal(newMealFromChild: Meal) {
    this.mealList.push(newMealFromChild);
  }

}
