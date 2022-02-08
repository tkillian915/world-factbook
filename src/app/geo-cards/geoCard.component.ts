import { Component, Input } from "@angular/core";


@Component({
    selector: 'wf-geoCard',
    templateUrl: 'geoCard.component.html',
    styleUrls: ['geoCard.component.css']
})

export class GeoCardComponent
{
    @Input() img: string;
    @Input() title: string;

    constructor()
    {
        this.img = "";
        this.title = "TITLE";
    }
}