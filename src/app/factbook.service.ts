import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { geoCardModel } from "./geo-cards/geoCard_list.model";
import { infoCardModel } from "./info-cards/infoCard_list.model";

@Injectable({
    providedIn: 'root'
})

export class FactbookService 
{
    private baseUrl: string = "https://world-factbook-17ada-default-rtdb.firebaseio.com/";
    private infoCardEndpoint: string = "info-cards.json";
    private geoCardEndpoint: string = "geo-cards.json";

    constructor(private http: HttpClient) 
    {

    }

    public getInfoCards()
    {
        return this.http.get<infoCardModel[]>(this.baseUrl + this.infoCardEndpoint);
    }

    public getGeoCards()
    {
        return this.http.get<geoCardModel[]>(this.baseUrl + this.geoCardEndpoint);
    }
}