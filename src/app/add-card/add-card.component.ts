import { Component, OnInit } from '@angular/core';
import { infoCardModel } from '../info-cards/infoCard_list.model';

@Component({
  selector: 'wf-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {

  }

  addCard(newCard:infoCardModel)
  {
    console.log("You clicked add card");
    console.log(newCard);
  }

}
