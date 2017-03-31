import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal-tracker.model';

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();
  
  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
