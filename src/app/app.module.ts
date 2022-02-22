import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footercomponent';
import { GeoCardComponent } from './geo-cards/geoCard.component';
import { InfoCard1Component } from './info-cards/infoCard1.component';
import { InfoCard2Component } from './info-cards/infoCard2.component';
import { SecondHeaderComponent } from './second header/second.header.component';
import { AppRoutingModule } from './app-routing.module';
import { MapsComponent } from './maps-page/maps.component';
import { AfricaComponent } from './africa-page/africa.countries.component';
import { ReferencesComponent } from './references/references.component';
import { AboutComponent } from './about-page/about.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { HomeLayoutComponent } from './home-layout.component';
import { MapsLayoutComponent } from './maps-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondHeaderComponent,
    FooterComponent,
    InfoCard1Component,
    InfoCard2Component,
    GeoCardComponent,
    MapsComponent,
    AfricaComponent,
    ReferencesComponent,
    AboutComponent,
    WorldPageComponent,
    HomeLayoutComponent,
    MapsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
