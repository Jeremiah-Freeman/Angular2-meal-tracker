import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Meal } from './../meal-tracker.model';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})
export class NewLogComponent implements OnInit {

  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, detail: string, calories: number) {
      var newMealToAdd: Meal = new Meal(name, detail, calories);
      this.newMealSender.emit(newMealToAdd);
    }

  constructor() { }

  ngOnInit() {
  }

}
