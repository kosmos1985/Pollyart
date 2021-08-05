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
import { DivorceComponent } from './components/faq/asked/divorce/divorce.component';
import { CustodyComponent } from './components/faq/asked/custody/custody.component';
import { DiaryComponent } from './components/faq/asked/diary/diary.component';
import { DivorcesComponent } from './components/faq/asked/divorces/divorces.component';
import { NameComponent } from './components/faq/asked/name/name.component';
import { IncorporateComponent } from './components/faq/asked/incorporate/incorporate.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';


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
    FaqComponent,
    DivorceComponent,
    CustodyComponent,
    DiaryComponent,
    DivorcesComponent,
    NameComponent,
    IncorporateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
