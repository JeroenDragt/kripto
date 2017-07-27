"use strict";

export class CoinInformation {
    public bitcoin = new CoinIdentifier("Bitcoin", "BTC", "http://www.cryptocompare.com/media/19633/btc.png");
    public ethereum = new CoinIdentifier("Ethereum", "ETH", "https://www.cryptocompare.com/media/20646/eth.png");
    public litecoin = new CoinIdentifier("Litecoin", "LTC", "https://www.cryptocompare.com/media/19782/litecoin-logo.png");
    public digitalCash = new CoinIdentifier("DigitalCash", "DASH", "https://www.cryptocompare.com/media/20626/dash.png");
    public monero = new CoinIdentifier("Monero", "XMR", "https://www.cryptocompare.com/media/19969/xmr.png");


    public GetCoinIdentifiers(): Array<CoinIdentifier> {
        return [this.bitcoin, this.ethereum, this.litecoin, this.digitalCash, this.monero]
    }
}

export class CoinIdentifier { 
    public active: boolean
    constructor(public name: string,
        public code: string,
        public imageUrl: string,
        ) {}
}

