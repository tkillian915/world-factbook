import { Component, Input } from "@angular/core";


@Component({
    selector: 'wf-geoCard',
    templateUrl: 'geoCard.component.html',
    styleUrls: ['geoCard.component.css']
})

export class GeoCardComponent
{
    @Input() img: string;
    title: string;
    location: string;

    constructor()
    {
        this.img = "";
        this.title = "TITLE";
        this.location = "LOCATION";
    }
}