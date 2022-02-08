import { Component } from '@angular/core';
import { geoCard_list } from './geo-cards/geoCard_list';
import { geoCardModel } from './geo-cards/geoCard_list.model';
import { locations_list } from './geo-cards/locations_list';
import { locationsListModel } from './geo-cards/locations_list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-factbook';
  geoCards: geoCardModel [] = [];
  locations: locationsListModel [] = [];

  constructor ()
  {
    for (var geoCard of geoCard_list)
    {
      console.log(geoCard);
      this.geoCards.push(geoCard);
    }

    for (var location of locations_list)
    {
      console.log(location);
      this.locations.push(location);
    }
  }
}
