import { Component } from "@angular/core";
import { mapCard_list } from "./mapCard_list";
import { MapCardModel } from "./mapCard_list.model";


@Component({
    selector: 'wf-maps',
    templateUrl: 'maps.component.html',
    styleUrls: ['maps.component.css']
})

export class MapsComponent
{

    mapCards: MapCardModel [] = [];

    constructor()
    {
    for (var mapCard of mapCard_list)
    {
      console.log(mapCard);
      this.mapCards.push(mapCard);
    }
}
}