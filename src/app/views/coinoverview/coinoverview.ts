import { inject, bindable } from "aurelia-framework";
import { CoinIdentifier} from "app/api/coin-information";
import { CoinApi, CoinTableRow } from "app/api/coin";

@inject(CoinApi)
export class CoinOverview {
    @bindable activeCoinIdentifier: CoinIdentifier;
    @bindable coinIdentifiers: Array<CoinIdentifier>;
    public coinTableRows: Array<CoinTableRow>;
    constructor(private currencyApi: CoinApi) { }

    public async attached() {
        this.coinTableRows = await this.currencyApi.getCoins("EUR", this.coinIdentifiers);
    }

    public changeActiveCoinCategory(identifier: CoinIdentifier) {
        debugger;
        this.activeCoinIdentifier = identifier;
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


