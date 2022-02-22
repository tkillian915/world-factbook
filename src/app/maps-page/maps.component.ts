import { Component, Input } from "@angular/core";
import { mapCard_list } from "./mapCard_list";
import { MapCardModel } from "./mapCard_list.model";


@Component({
    selector: 'wf-maps',
    templateUrl: 'maps.component.html',
    styleUrls: ['maps.component.css']
})

export class MapsComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() text: string;

    constructor() 
    {
        this.img = "";
        this.title = "TITLE";
        this.text = "Body text";
    }

}