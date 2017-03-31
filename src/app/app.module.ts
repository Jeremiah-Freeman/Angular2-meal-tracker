import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewLogComponent } from './new-log/new-log.component';
import { EditLogComponent } from './edit-log/edit-log.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLogComponent,
    EditLogComponent
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
