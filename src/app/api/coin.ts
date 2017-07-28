import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { CoinIdentifier } from "app/api/coin-information" 
@inject(HttpClient)
export class CoinApi {
    constructor(private http: HttpClient) {

    }

    private rootUrl: string = "https://min-api.cryptocompare.com/data/pricemultifull?"
    public async getCoins(valuta: string, coins: Array<CoinIdentifier>) {
        let coinsQuery = await this.getCoinsQueryString(coins);
        let valutaQuery = "&tsyms=" + valuta;
        let response = await this.http.fetch(this.rootUrl + coinsQuery + valutaQuery);
        let json = await response.json()

        let parsedCoins = new Array<CoinTableRow>();
        coins.forEach(c => {
            let result = json.DISPLAY[c.code][valuta]            
            let parsedCoin = new CoinTableRow(c, result.PRICE, result.CHANGEPCT24HOUR, c.imageUrl);
            parsedCoins.push(parsedCoin);
        })
        return parsedCoins;
    }

    private getCoinsQueryString(coins: Array<CoinIdentifier>) {
        let queryString = "fsyms=";
        let first = true;
        coins.forEach(coin => {
            if(first)
            {
                queryString += coin.code;
                first = false;
            }
            else{
                queryString += "," +coin.code;
            }
            
        });
        return queryString;
    }
}

export class CoinTableRow {
    public active: boolean = false;
    constructor(
    public identifier: CoinIdentifier,    
    public price: string,
    public percentChange: number,
    public imageUrl: string
    ){}
}