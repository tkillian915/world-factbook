import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footercomponent';
import { InfoCard1Component } from './info-cards/infoCard1.component';
import { InfoCard2Component } from './info-cards/infoCard2.component';
import { SecondHeaderComponent } from './second header/second.header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondHeaderComponent,
    FooterComponent,
    InfoCard1Component,
    InfoCard2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
