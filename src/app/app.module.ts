import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BongDaComponent } from './livemf/bongda.component';
import { FlatpickrModule, FlatpickrDefaults } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule,

  ],
  providers: [FlatpickrDefaults],
  bootstrap: [AppComponent]
})
export class AppModule { }
