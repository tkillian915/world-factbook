import { Component, OnInit } from "@angular/core";
import { geoCardModel } from "./geo-cards/geoCard_list.model";
import { infoCardModel } from "./info-cards/infoCard_list.model";
import { geoCard_list } from "./geo-cards/geoCard_list";
import { infoCard_list } from "./info-cards/infoCard_list";
import { FactbookService } from "./factbook.service";


@Component({
    selector: 'wf-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit
{
    title = 'world-factbook';
  geoCards: geoCardModel [] = [];
  infoCards: infoCardModel [] = [];

  constructor (private factbookService: FactbookService)
  {
    for (var geoCard of geoCard_list)
    {
      console.log(geoCard);
      this.geoCards.push(geoCard);
    }
  }

  ngOnInit(): void {
    this.factbookService.getInfoCards().subscribe((data: infoCardModel []) => {
      console.log("Fetching info cards");
      for (var infoCard of data)
      {
        console.log(infoCard);
        this.infoCards.push(infoCard);
      }
    });
  }
}