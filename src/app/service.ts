import { HttpClient } from "@angular/common/http";

export class FactbookService
{
    private baseUrl: string = "https://world-factbook-17ada-default-rtdb.firebaseio.com/";
    private infoCardEndpoint: string = "info-cards.json";

    constructor(private http:HttpClient)
    {
        
    }
}