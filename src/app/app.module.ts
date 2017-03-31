import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewLogComponent } from './new-log/new-log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { CaloriesPipe } from './view-calories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewLogComponent,
    EditLogComponent,
    MealListComponent,
    CaloriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
