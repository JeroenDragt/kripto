// //let response = await this.http.fetch("https://www.litebit.eu/requests/jsonp.php?call=btc");
// import { inject } from "aurelia-framework";
// import { HttpClient } from "aurelia-fetch-client";
// import { WebsiteCoinValue } from "app/api/websites/websiteCoinValue";
// import * as fetchJsonp from "fetch-jsonp" ;

// @inject(HttpClient)
// export class LiteBitApi {
//     constructor(private http: HttpClient) {

//     }

//     public root = "https://www.litebit.eu/requests/jsonp.php?call=btc";

//     public async getBitcoinPrice() {
//         try {

            
//             let json = await fetchJsonp("https://www.litebit.eu/requests/jsonp.php", {
//                 jsonpCallbackFunction: "btc",
//                 jsonpCallback: "call",
//             }).then(function(response) {
        
        
            
//             debugger;
//         }
//         catch (ex) {

//         }
//     }
// }
