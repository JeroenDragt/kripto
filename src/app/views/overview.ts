"use strict";
import { inject, observable } from "aurelia-framework";
import { Router } from "aurelia-router"
import { CoinIdentifier, CoinIdentifierList } from "app/api/coinIdentifierList";

@inject(CoinIdentifierList,Router)
export class Overview {
    constructor(public coinIdentifierList: CoinIdentifierList, public router: Router) {

    }

    @observable public activeCoinIdentifier: CoinIdentifier;
    public articleId: string;

    public async activate(params) {
        
        this.articleId = params.id;

    }

    public changeActiveCoin(coinIdentifier: CoinIdentifier) {
        this.activeCoinIdentifier = coinIdentifier;
    }

    public activeCoinIdentifierChanged(newValue, oldValue) {
        if (newValue) {

            this.coinIdentifierList.coinIdentifiers.forEach(identifier => {
                if (identifier.code === newValue.code) {
                    identifier.active = true;
                }
                else {
                    identifier.active = false;
                }
            })
        }
    }

    public async resetActiveCoin() {
        this.coinIdentifierList.coinIdentifiers.forEach(identifier => {
            identifier.active = false;
        });

        this.activeCoinIdentifier = undefined;
        this.router.navigateToRoute("overview");
    }
}
