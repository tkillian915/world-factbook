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
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { JobsComponent } from './jobs/jobs.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    MapsLayoutComponent,
    LearnMoreComponent,
    JobsComponent,
    UserInfoComponent,
    AddCardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
