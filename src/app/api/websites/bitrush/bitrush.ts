import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";

@inject(HttpClient)
export class BitRushApi {
    constructor(private http: HttpClient) {

    }

    public root = "https://api.bitrush.nl/v1/products";

    
    private async getPrice(coinCode: string) {
            let response = await this.http.fetch(this.root + "/EUR-" + coinCode );
            let json = await response.json() as BitRushCoin;         
            return new WebsiteCoinValue("Bitrush", json.coin_currency, json.ask);
    }
    
    public async getBitcoinPrice() {
        let coin = await this.getPrice("XBT");
        coin.coinName = "BTC";
        return coin;
    }

    public async getLiteCoinPrice() {
        return await this.getPrice("LTC");
    }

    public async getDigitalCashPrice() {
        return await this.getPrice("DASH");
    }

    public async getEthereumPrice() {
        return await this.getPrice("ETH");
    }
}

class BitRushCoin 
{
    public id: string;
    public fiat_currency: string;
    public coin_currency: string;
    public fiat_quantity: number;
    public coin_quantity: number;
    public ask: number;
    public bid: number;
}