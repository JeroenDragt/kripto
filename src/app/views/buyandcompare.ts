import { inject } from "aurelia-framework";
//import { AnyCoinDirectApi } from "app/api/websites/anycoindirect/anycoindirect";
import { CoinBaseApi } from "app/api/websites/coinbase/coinbase";
import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";
// import { BitonicApi } from "app/api/websites/bitonic/bitonic"
import { BitRushApi } from "app/api/websites/bitrush/bitrush";

@inject(BitRushApi, CoinBaseApi)
export class BuyAndCompare {
    
    constructor(private bitrushApi: BitRushApi, private coinBaseApi: CoinBaseApi) {}
    private coins: Array<WebsiteCoinValue> = new Array<WebsiteCoinValue>();
    public async activate()
    {
        
        let url = "https://api.bitrush.nl/v1/products";
        
        this.coins.push( await this.bitrushApi.getBitcoinPrice())
        this.coins.push( await this.bitrushApi.getLiteCoinPrice())
        this.coins.push( await this.bitrushApi.getEthereumPrice())
        this.coins.push( await this.bitrushApi.getDigitalCashPrice())
        this.coins.push( await this.coinBaseApi.getBitcoinPrice())
        this.coins.push( await this.coinBaseApi.getLiteCoinPrice())
        this.coins.push( await this.coinBaseApi.getEthereumPrice())
        
        await this.coinBaseApi.getBitcoinPrice();
        

        // this.coins = new Array<WebsiteCoinValue>();
        // this.coins.push(await this.bitonicApi.getIdealPrice("btc"));     
        // this.coins.push(await this.btcdirectApi.getIdealPrice("btc"));
        // this.coins.push(await this.btcdirectApi.getIdealPrice("eth"));
        // this.coins.push(await this.btcdirectApi.getIdealPrice("ltc"));
        // this.coins.push(await this.btcdirectApi.getIdealPrice("xmr"));
        // this.coins.push(await this.btcdirectApi.getIdealPrice("dash"));
    }
}
