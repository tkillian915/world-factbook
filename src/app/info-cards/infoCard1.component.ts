import { Component, Input } from "@angular/core";


@Component({
    selector: 'wf-infoCard1',
    templateUrl: 'infoCard1.component.html',
    styleUrls: ['infoCard1.component.css']
})

export class InfoCard1Component 
{
    @Input() img: string;
    @Input() title: string;
    @Input() content: string;

    constructor()
    {
        this.img = "";
        this.title = "TITLE";
        this.content = "FILLER TEXT";
    } 
}