import { Component, Input } from "@angular/core";


@Component({
    selector: 'wf-maps',
    templateUrl: 'maps.component.html',
    styleUrls: ['maps.component.css']
})

export class MapsComponent 
{
    @Input() img: string;
    @Input() title: string;
    @Input() text: string;

    constructor() 
    {
        this.img = "";
        this.title = "Card Title";
        this.text = "Body text";
    }

}