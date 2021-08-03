import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { PractisComponent } from './components/practis/practis.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavComponent } from './components/nav/nav.component';
import { FaqComponent } from './components/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AboutComponent,
    PractisComponent,
    LawyersComponent,
    PublicationsComponent,
    ClientsComponent,
    NavComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
