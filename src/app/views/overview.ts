"use strict";
import { inject, observable } from "aurelia-framework";
import { CoinInformation, CoinIdentifier} from "app/api/coin-information"; 


@inject(CoinInformation)
export class Overview {
    constructor(private identifierApi: CoinInformation) { 

    }
    
    public coinIdentifiers: Array<CoinIdentifier>;
    @observable public activeCoinIdentifier: CoinIdentifier;
    public articleId: string;

    public async activate(params) {
        this.articleId = params.id;
        this.coinIdentifiers = this.identifierApi.GetCoinIdentifiers();
    }   

    public changeActiveCoin(coinIdentifier: CoinIdentifier) {
        this.activeCoinIdentifier = coinIdentifier;
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
