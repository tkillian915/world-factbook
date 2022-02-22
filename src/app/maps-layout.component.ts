import { Component } from "@angular/core";
import { mapCard_list } from "./mapCard_list";
import { MapCardModel } from "./mapCard_list.model";


@Component({
    selector: 'wf-maps-layout',
    templateUrl: 'maps-layout.component.html',
    styleUrls: ['maps-layout.component.css']
})

export class MapsLayoutComponent
{
  title = 'maps';
  
  mapCards: MapCardModel[] = [];

  constructor ()
  {
    for (var mapCard of mapCard_list)
    {
      console.log(mapCard);
      this.mapCards.push(mapCard);
    }
  }
}