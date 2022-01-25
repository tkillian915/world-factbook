import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footercomponent';
import { SecondHeaderComponent } from './second header/second.header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
