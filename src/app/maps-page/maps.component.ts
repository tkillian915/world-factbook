import { Component } from "@angular/core";


@Component({
    selector: 'wf-maps',
    templateUrl: 'maps.component.html',
    styleUrls: ['maps.component.css']
})

export class MapsComponent
{

    geoCards: MapsCardModel [] = [];

    constructor()
    {
    for (var mapCard of mapCard_list)
    {
      console.log(mapCard);
      this.geoCards.push(mapCard);
    }
}
}