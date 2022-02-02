import { Component } from "@angular/core";


@Component({
    selector: 'wf-geoCard',
    templateUrl: 'geoCard.component.html',
    styleUrls: ['geoCard.component.css']
})

export class GeoCardComponent
{
    img: string;
    title: string;
    region: string;

    constructor() {
        this.img = "image for regions";
        this.title = "Regions";
        this.region = 
    }
}