import { Component } from '@angular/core';
import { geoCard_list } from './geo-cards/geoCard_list';
import { geoCardModel } from './geo-cards/geoCard_list.model';
import { infoCard_list } from './info-cards/infoCard_list';
import { infoCardModel } from './info-cards/infoCard_list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-factbook';
  geoCards: geoCardModel [] = [];
  infoCards: infoCardModel [] = [];

  constructor ()
  {
    for (var geoCard of geoCard_list)
    {
      console.log(geoCard);
      this.geoCards.push(geoCard);
    }

    for (var infoCard of infoCard_list)
    {
      console.log(infoCard);
      this.infoCards.push(infoCard);
    }
  }
}
