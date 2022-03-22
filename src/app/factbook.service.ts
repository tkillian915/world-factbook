import { Injectable } from "@angular/core";
import { geoCardModel } from "./geo-cards/geoCard_list.model";
import { infoCardModel } from "./info-cards/infoCard_list.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class FactbookService 
{
    constructor(private db: AngularFireDatabase) 
    {

    }

    public getInfoCards()
    {
        // return this.http.get<infoCardModel[]>(this.baseUrl + this.infoCardEndpoint);\
        return this.db.list<infoCardModel>("info-cards").valueChanges();
    }

    public getGeoCards()
    {
        // return this.http.get<geoCardModel[]>(this.baseUrl + this.geoCardEndpoint);
        return this.db.list<geoCardModel>("geo-cards").valueChanges();

    }

    public addCard(newCard : infoCardModel)
    {
        this.db.list<infoCardModel>('cards').push(newCard)
    }
}