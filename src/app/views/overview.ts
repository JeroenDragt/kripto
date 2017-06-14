"use strict";
import { inject } from "aurelia-framework";
import { WordPressApi, WordPressPost } from "app/api/wordpress";
import { CoinApi, Coin } from "app/api/coin";
import { CoinInformation, CoinIdentifier} from "app/api/coin-information"; 


@inject(WordPressApi, CoinApi, CoinInformation)
export class Bitcoin {
    constructor(private wordpressApi: WordPressApi, private currencyApi: CoinApi, private identifierApi: CoinInformation) { 

    }
    public posts: Array<WordPressPost>;
    public coins: Array<Coin>;
    public coinIdentifiers: Array<CoinIdentifier>;

    public async activate() {
                
        await this.loadAllPosts();   
        this.coinIdentifiers = this.identifierApi.GetCoinIdentifiers();
        this.coins = await this.currencyApi.getCoins("EUR", this.coinIdentifiers);        
    }

    public async changeActiveCoin(code: string, name: string)
    {
        this.posts =  await this.wordpressApi.getPostsByCoin(name);
        this.coinIdentifiers.forEach(identifier => {
            if(identifier.code === code ){
                identifier.active = true;
            }
            else {
                identifier.active = false;
            }
        })
    }

    public async resetActiveCoin() {
        await this.loadAllPosts();
        this.coinIdentifiers.forEach(identifier => {
            identifier.active = false;
        });
    }

    public async loadAllPosts(){
        this.posts = await this.wordpressApi.getPosts();
    }
}
