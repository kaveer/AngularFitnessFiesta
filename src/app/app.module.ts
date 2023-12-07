import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnessHeaderModule } from 'projects/fitness-header/src/public-api';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FitnessHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
