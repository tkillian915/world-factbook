import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-factbook';
  regions: [] = [];

  constructor()
  {
    for (var location of locations_list)
    {
      this.regions.push(location);
    }
  }
}
