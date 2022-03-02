import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { infoCardModel } from "./info-cards/infoCard_list.model";

@Injectable({
    providedIn: 'root'
})

export class FactbookService 
{
    private baseUrl: string = "https://world-factbook-17ada-default-rtdb.firebaseio.com/";
    private infoCardEndpoint: string = "info-cards.json";

    constructor(private http: HttpClient) 
    {

    }

    public getInfoCards()
    {
        return this.http.get<infoCardModel[]>(this.baseUrl + this.infoCardEndpoint);
    }
}