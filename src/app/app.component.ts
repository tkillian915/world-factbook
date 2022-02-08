import { Component } from '@angular/core';
import { geoCardModel } from './geo-cards/geoCard_list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-factbook';
  geoCards: geoCardModel [] = [];
}
