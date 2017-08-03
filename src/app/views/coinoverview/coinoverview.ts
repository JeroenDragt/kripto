import { inject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";
import { CoinIdentifier, CoinIdentifierList} from "app/api/coinIdentifierList";
import { CoinApi, CoinTableRow } from "app/api/coin";

@inject(CoinApi, CoinIdentifierList, Router)
export class CoinOverview {
    @bindable activeCoinIdentifier: CoinIdentifier;
    
    public coinTableRows: Array<CoinTableRow>;
    constructor(private currencyApi: CoinApi, public coinIdentifierList: CoinIdentifierList, private router: Router) {      
     }

    public async attached() {
        this.coinTableRows = await this.currencyApi.getCoins("EUR", this.coinIdentifierList.coinIdentifiers);
    }

    public changeActiveCoinCategory(identifier: CoinIdentifier) {
        this.activeCoinIdentifier = identifier;
        this.router.navigateToRoute("overview");
    }

    public activeCoinIdentifierChanged(newValue, oldValue) {
         this.coinTableRows.forEach(coinTableRow => {
            if(coinTableRow.identifier === newValue){
                coinTableRow.active = true;
            }
            else {
                coinTableRow.active = false;
            }
        })
    }
}


