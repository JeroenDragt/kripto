import { inject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { CoinIdentifier, CoinIdentifierList } from "app/api/coinIdentifierList";
import { CoinApi, CoinTableRow } from "app/api/coin";
import { ChartApi } from "app/api/chart";

@inject(CoinApi, CoinIdentifierList, Router, ChartApi)
export class CoinOverview {    
    public myData;
    @bindable activeCoinIdentifier: CoinIdentifier;
    public coinTableRows: Array<CoinTableRow>;

    constructor(private currencyApi: CoinApi,
                public coinIdentifierList: CoinIdentifierList,
                private router: Router,
                public chartApi: ChartApi) {
        
    }

    public async attached() {
        this.coinTableRows = await this.currencyApi.getCoins("EUR", this.coinIdentifierList.coinIdentifiers);
        this.myData = await this.chartApi.getAllChartData();
    }

    public changeActiveCoinCategory(identifier: CoinIdentifier) {
        this.activeCoinIdentifier = identifier;
        this.router.navigateToRoute("overview");
    }

    public activeCoinIdentifierChanged(newValue, oldValue) {
        if (newValue) {     
            this.coinTableRows.forEach(coinTableRow => {
                if (coinTableRow.identifier === newValue) {
                    coinTableRow.active = true;
                }
                else {
                    coinTableRow.active = false;
                }
            })
        }
    }    

    // https://widgets.cryptocompare.com/serve/v2/coin/chart?fsym=BTC&tsym=EUR&period=1D&app=jdragt.com
}


