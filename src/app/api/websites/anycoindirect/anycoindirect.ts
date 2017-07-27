// import { inject } from "aurelia-framework";
// import { HttpClient } from "aurelia-fetch-client";
// import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";

// @inject(HttpClient)
// export class AnyCoinDirectApi {
//     constructor(private http: HttpClient) {

//     }

//     public root = "https://anycoindirect.eu/";

//     public async getIdealPriceByCoin(coinCode: string) {
//         try {            
            
            
//             let response = await this.http.fetch(this.root + "buyprices?CoinCode=" + coinCode + "&FiatCode=EUR&CoinAmount=1");
            

//             debugger;
//             let posts = await response.json();
//             let paymentMethods = posts.Data as Array<PaymentMethod>;
//             let Ideal = paymentMethods.find(x => x.Id === 1);
//             return new WebsiteCoinValue("AnyCoinDirect", Ideal.CoinAmount);
//         }
//         catch (ex) {

//         }

//     }
// }

// export class Message {
//     public Nonce: number;
//     public Data: Object;
//     public Errors: Array<Error>;
//     public HasErrors: boolean;
// }

// export class PaymentMethod {
//     public Id: number;
//     public Name: string;
//     public CoinAmount: number;
//     public FiatAmount: number;
// }

// export class Error {
//     PropertyName: string;
//     PropertyExceptionMessage: string;
// }