import { Component, OnInit } from '@angular/core';
import { FactbookService } from '../factbook.service';
import { infoCardModel } from '../info-cards/infoCard_list.model';

@Component({
  selector: 'wf-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(public fs : FactbookService) { }

  ngOnInit(): void 
  {

  }

  addCard(newCard:infoCardModel)
  {
    console.log("You clicked add card");
    console.log(newCard);
    this.fs.addCard(newCard);
  }

}
