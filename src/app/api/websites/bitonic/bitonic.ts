// import { inject } from "aurelia-framework";
// import { HttpClient } from "aurelia-fetch-client";
// import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";

// @inject(HttpClient)
// export class BitonicApi {
//     constructor(private http: HttpClient) {

//     }

//     public root = "https://bitonic.nl/api/buy?";

//     public async getIdealPrice(coinCode: string) {
//         try {            
//             let response = await this.http.fetch(this.root + coinCode + "=1");
//             let json = await response.json();
//             return new WebsiteCoinValue("Bitonic", coinCode,  json.eur);
//         }
//         catch (ex) {

//         }

//     }
// }