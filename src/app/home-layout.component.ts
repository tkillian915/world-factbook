import { Component } from "@angular/core";
import { geoCardModel } from "./geo-cards/geoCard_list.model";
import { infoCardModel } from "./info-cards/infoCard_list.model";
import { geoCard_list } from "./geo-cards/geoCard_list";
import { infoCard_list } from "./info-cards/infoCard_list";
import { mapCard_list } from "./maps-page/mapCard_list";
import { MapCardModel } from "./maps-page/mapCard_list.model";


@Component({
    selector: 'wf-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent
{
    title = 'world-factbook';
  geoCards: geoCardModel [] = [];
  infoCards: infoCardModel [] = [];
  mapCards: MapCardModel[] = [];

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

    for (var mapCard of mapCard_list)
    {
      console.log(mapCard);
      this.mapCards.push(mapCard);
    }
  }
}