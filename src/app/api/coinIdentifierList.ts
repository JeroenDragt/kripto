"use strict";

export class CoinIdentifierList {
    public coinIdentifiers: Array<CoinIdentifier> = new Array<CoinIdentifier>();
    private bitcoin = new CoinIdentifier("Bitcoin", "BTC", "http://www.cryptocompare.com/media/19633/btc.png");
    private ethereum = new CoinIdentifier("Ethereum", "ETH", "https://www.cryptocompare.com/media/20646/eth.png");
    private litecoin = new CoinIdentifier("Litecoin", "LTC", "https://www.cryptocompare.com/media/19782/litecoin-logo.png");
    private digitalCash = new CoinIdentifier("DigitalCash", "DASH", "https://www.cryptocompare.com/media/20626/dash.png");
    private monero = new CoinIdentifier("Monero", "XMR", "https://www.cryptocompare.com/media/19969/xmr.png");
    constructor() {
        this.coinIdentifiers = [this.bitcoin, this.ethereum, this.litecoin, this.digitalCash, this.monero];
    }

    public selectByCoinCode(coinCode: string) {
        this.coinIdentifiers.forEach(identifier => {
            if (identifier.code === coinCode) {
                identifier.active = true;
            }
            else {
                identifier.active = false;
            }
        });
    }

    public selectByCoinName(coinName: string) {
        this.coinIdentifiers.forEach(identifier => {
            if (identifier.name === coinName) {
                identifier.active = true;
            }
            else {
                identifier.active = false;
            }
        });
    }

    public resetActiveCoin() {
        this.coinIdentifiers.forEach(identifier => {
            identifier.active = false;
        });
    }
}

export class CoinIdentifier {
    public active: boolean
    constructor(public name: string,
        public code: string,
        public imageUrl: string,
    ) { }
}

