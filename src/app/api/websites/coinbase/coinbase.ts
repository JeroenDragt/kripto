import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";
import * as fetchJsonp from "fetch-jsonp";

@inject(HttpClient)
export class CoinBaseApi {
    constructor(private http: HttpClient) { //TODO use npm package

    }

    public root = "https://api.coinbase.com/v2/exchange-rates?currency=";

    private async getPrice(coin: string)
    {
        let response = await this.http.fetch(this.root + coin);
        var json = await response.json();
        debugger;
        return new WebsiteCoinValue("Coinbase", coin , json.data.rates["EUR"] )
    }
    
    public async getBitcoinPrice() {
        return await this.getPrice("BTC")        
    }

    public async getEthereumPrice() {
        return await this.getPrice("ETH")
    }

    public async getLiteCoinPrice() {
        return await this.getPrice("LTC")
    }



}
