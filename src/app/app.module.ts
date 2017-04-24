import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExcelModule,
    FormsModule,
    GridModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
