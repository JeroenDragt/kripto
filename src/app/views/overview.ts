"use strict";
import { inject } from "aurelia-framework";
import { CoinInformation, CoinIdentifier} from "app/api/coin-information"; 


@inject(CoinInformation)
export class Overview {
    constructor(private identifierApi: CoinInformation) { 

    }
    
    public coinIdentifiers: Array<CoinIdentifier>;
    public activeCoin: CoinIdentifier;

    public async activate() {
                
        //await this.loadAllPosts(); 
        this.coinIdentifiers = this.identifierApi.GetCoinIdentifiers();
        //this.coinTableRows = await this.currencyApi.getCoins("EUR", this.coinIdentifiers);
    }   

    public changeActiveCoin(coinIdentifier: CoinIdentifier)
    {
        this.activeCoin = coinIdentifier;
    }

    public activeCoinIdentifierChanged(newValue, oldValue) {
        this.coinIdentifiers.forEach(identifier => {
            if(identifier.code === newValue.code ){
                identifier.active = true;
            }
            else {
                identifier.active = false;
            }
        })
    }

    public async resetActiveCoin() {
        this.coinIdentifiers.forEach(identifier => {
            identifier.active = false;
        });
    }
   
}
