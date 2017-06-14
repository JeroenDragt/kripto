var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(router) {
            this.router = router;
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: [''], name: 'home', moduleId: 'app/views/overview' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router),
        __metadata("design:paramtypes", [aurelia_router_1.Router])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLEdBQUc7UUFDZCxhQUFvQixNQUFjO1lBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVsQyxDQUFDO1FBQ0QsNkJBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsTUFBTTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7YUFFOUQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILFVBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLHVCQUFNLENBQUM7eUNBRWUsdUJBQU07T0FEdkIsR0FBRyxDQVlmO0lBWlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcblxuQGluamVjdChSb3V0ZXIpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2FwcC92aWV3cy9vdmVydmlldycgfVxuXG4gICAgXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('app/api/coin-information',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinInformation = (function () {
        function CoinInformation() {
            this.bitcoin = new CoinIdentifier("Bitcoin", "BTC", "http://www.cryptocompare.com/media/19633/btc.png");
            this.ethereum = new CoinIdentifier("Ethereum", "ETH", "https://www.cryptocompare.com/media/20646/eth.png");
            this.litecoin = new CoinIdentifier("Litecoin", "LTC", "https://www.cryptocompare.com/media/19782/litecoin-logo.png");
            this.digitalCash = new CoinIdentifier("DigitalCash", "DASH", "https://www.cryptocompare.com/media/20626/dash.png");
            this.monero = new CoinIdentifier("Monero", "XMR", "https://www.cryptocompare.com/media/19969/xmr.png");
        }
        CoinInformation.prototype.GetCoinIdentifiers = function () {
            return [this.bitcoin, this.ethereum, this.litecoin, this.digitalCash, this.monero];
        };
        return CoinInformation;
    }());
    exports.CoinInformation = CoinInformation;
    var CoinIdentifier = (function () {
        function CoinIdentifier(name, code, imageUrl) {
            this.name = name;
            this.code = code;
            this.imageUrl = imageUrl;
        }
        return CoinIdentifier;
    }());
    exports.CoinIdentifier = CoinIdentifier;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOztJQUViO1FBQUE7WUFDVyxZQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1lBQ25HLGFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7WUFDdEcsYUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsNkRBQTZELENBQUMsQ0FBQztZQUNoSCxnQkFBVyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsb0RBQW9ELENBQUMsQ0FBQztZQUM5RyxXQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1FBTTdHLENBQUM7UUFIVSw0Q0FBa0IsR0FBekI7WUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLDBDQUFlO0lBYTVCO1FBRUksd0JBQW1CLElBQVksRUFDcEIsSUFBWSxFQUNaLFFBQWdCO1lBRlIsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUNwQixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQixDQUFDO1FBQ1oscUJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLHdDQUFjIiwiZmlsZSI6ImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW5JbmZvcm1hdGlvbiB7XHJcbiAgICBwdWJsaWMgYml0Y29pbiA9IG5ldyBDb2luSWRlbnRpZmllcihcIkJpdGNvaW5cIiwgXCJCVENcIiwgXCJodHRwOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzE5NjMzL2J0Yy5wbmdcIik7XHJcbiAgICBwdWJsaWMgZXRoZXJldW0gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJFdGhlcmV1bVwiLCBcIkVUSFwiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzIwNjQ2L2V0aC5wbmdcIik7XHJcbiAgICBwdWJsaWMgbGl0ZWNvaW4gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJMaXRlY29pblwiLCBcIkxUQ1wiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzE5NzgyL2xpdGVjb2luLWxvZ28ucG5nXCIpO1xyXG4gICAgcHVibGljIGRpZ2l0YWxDYXNoID0gbmV3IENvaW5JZGVudGlmaWVyKFwiRGlnaXRhbENhc2hcIiwgXCJEQVNIXCIsIFwiaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20vbWVkaWEvMjA2MjYvZGFzaC5wbmdcIik7XHJcbiAgICBwdWJsaWMgbW9uZXJvID0gbmV3IENvaW5JZGVudGlmaWVyKFwiTW9uZXJvXCIsIFwiWE1SXCIsIFwiaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20vbWVkaWEvMTk5NjkveG1yLnBuZ1wiKTtcclxuXHJcblxyXG4gICAgcHVibGljIEdldENvaW5JZGVudGlmaWVycygpOiBBcnJheTxDb2luSWRlbnRpZmllcj4ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5iaXRjb2luLCB0aGlzLmV0aGVyZXVtLCB0aGlzLmxpdGVjb2luLCB0aGlzLmRpZ2l0YWxDYXNoLCB0aGlzLm1vbmVyb11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvaW5JZGVudGlmaWVyIHsgICAgXHJcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb2RlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgKSB7fVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app/api/coin',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinApi = (function () {
        function CoinApi(http) {
            this.http = http;
            this.rootUrl = "https://min-api.cryptocompare.com/data/pricemultifull?";
        }
        CoinApi.prototype.getCoins = function (valuta, coins) {
            return __awaiter(this, void 0, void 0, function () {
                var coinsQuery, valutaQuery, response, json, parsedCoins;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getCoinsQueryString(coins)];
                        case 1:
                            coinsQuery = _a.sent();
                            valutaQuery = "&tsyms=" + valuta;
                            return [4, this.http.fetch(this.rootUrl + coinsQuery + valutaQuery)];
                        case 2:
                            response = _a.sent();
                            return [4, response.json()];
                        case 3:
                            json = _a.sent();
                            parsedCoins = new Array();
                            coins.forEach(function (c) {
                                var result = json.DISPLAY[c.code][valuta];
                                var parsedCoin = new Coin(c.code, c.name, result.PRICE, result.CHANGEPCT24HOUR, c.imageUrl);
                                parsedCoins.push(parsedCoin);
                            });
                            return [2, parsedCoins];
                    }
                });
            });
        };
        CoinApi.prototype.getCoinsQueryString = function (coins) {
            var queryString = "fsyms=";
            var first = true;
            coins.forEach(function (coin) {
                if (first) {
                    queryString += coin.code;
                    first = false;
                }
                else {
                    queryString += "," + coin.code;
                }
            });
            return queryString;
        };
        return CoinApi;
    }());
    CoinApi = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], CoinApi);
    exports.CoinApi = CoinApi;
    var Coin = (function () {
        function Coin(code, name, price, percentChange, imageUrl) {
            this.code = code;
            this.name = name;
            this.price = price;
            this.percentChange = percentChange;
            this.imageUrl = imageUrl;
        }
        return Coin;
    }());
    exports.Coin = Coin;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsT0FBTztRQUNoQixpQkFBb0IsSUFBZ0I7WUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUk1QixZQUFPLEdBQVcsd0RBQXdELENBQUE7UUFGbEYsQ0FBQztRQUdZLDBCQUFRLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxLQUE0Qjs7Z0NBRzFELFdBQVcsa0JBSVgsV0FBVzs7O2dDQUxFLFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFBOzt5Q0FBckMsU0FBcUM7MENBQ3BDLFNBQVMsR0FBRyxNQUFNOzRCQUNyQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxFQUFBOzt1Q0FBOUQsU0FBOEQ7NEJBQ2xFLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBcUI7MENBRWQsSUFBSSxLQUFLLEVBQVE7NEJBRW5DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dDQUNYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUN6QyxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDNUYsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDakMsQ0FBQyxDQUFDLENBQUE7NEJBRUYsV0FBTyxXQUFXLEVBQUM7Ozs7U0FDdEI7UUFFTyxxQ0FBbUIsR0FBM0IsVUFBNEIsS0FBNEI7WUFDcEQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FDVCxDQUFDO29CQUNHLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELElBQUksQ0FBQSxDQUFDO29CQUNELFdBQVcsSUFBSSxHQUFHLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbEMsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBQ0wsY0FBQztJQUFELENBeENBLEFBd0NDLElBQUE7SUF4Q1ksT0FBTztRQURuQiwwQkFBTSxDQUFDLGlDQUFVLENBQUM7eUNBRVcsaUNBQVU7T0FEM0IsT0FBTyxDQXdDbkI7SUF4Q1ksMEJBQU87SUEwQ3BCO1FBQ0ksY0FDTyxJQUFZLEVBQ1osSUFBWSxFQUNaLEtBQWEsRUFDYixhQUFxQixFQUNyQixRQUFnQjtZQUpoQixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtZQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7WUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtZQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ3JCLENBQUM7UUFDUCxXQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSxvQkFBSSIsImZpbGUiOiJhcHAvYXBpL2NvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJhdXJlbGlhLWZldGNoLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBDb2luSWRlbnRpZmllciB9IGZyb20gXCJhcHAvYXBpL2NvaW4taW5mb3JtYXRpb25cIiBcclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgQ29pbkFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByb290VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vbWluLWFwaS5jcnlwdG9jb21wYXJlLmNvbS9kYXRhL3ByaWNlbXVsdGlmdWxsP1wiXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29pbnModmFsdXRhOiBzdHJpbmcsIGNvaW5zOiBBcnJheTxDb2luSWRlbnRpZmllcj4pIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29pbnNRdWVyeSA9IGF3YWl0IHRoaXMuZ2V0Q29pbnNRdWVyeVN0cmluZyhjb2lucyk7XHJcbiAgICAgICAgbGV0IHZhbHV0YVF1ZXJ5ID0gXCImdHN5bXM9XCIgKyB2YWx1dGE7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMucm9vdFVybCArIGNvaW5zUXVlcnkgKyB2YWx1dGFRdWVyeSk7XHJcbiAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZENvaW5zID0gbmV3IEFycmF5PENvaW4+KCk7ICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvaW5zLmZvckVhY2goYyA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBqc29uLkRJU1BMQVlbYy5jb2RlXVt2YWx1dGFdXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRDb2luID0gbmV3IENvaW4oYy5jb2RlLCBjLm5hbWUsIHJlc3VsdC5QUklDRSwgcmVzdWx0LkNIQU5HRVBDVDI0SE9VUiwgYy5pbWFnZVVybCk7XHJcbiAgICAgICAgICAgIHBhcnNlZENvaW5zLnB1c2gocGFyc2VkQ29pbik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZENvaW5zOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2luc1F1ZXJ5U3RyaW5nKGNvaW5zOiBBcnJheTxDb2luSWRlbnRpZmllcj4pIHtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcImZzeW1zPVwiO1xyXG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcclxuICAgICAgICAgICAgaWYoZmlyc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGNvaW4uY29kZTtcclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiLFwiICtjb2luLmNvZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29pbiB7XHJcbiAgICBjb25zdHJ1Y3RvciggICAgXHJcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nLFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBwcmljZTogc3RyaW5nLFxyXG4gICAgcHVibGljIHBlcmNlbnRDaGFuZ2U6IHN0cmluZyxcclxuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nXHJcbiAgICApe31cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app/api/wordpress',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WordPressApi = (function () {
        function WordPressApi(http) {
            this.http = http;
            this.wordpressRoot = "http://www.jdragt.com/Kripto/wp-json/wp/v2/";
        }
        WordPressApi.prototype.getPosts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, posts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "posts?_embed")];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            posts = _a.sent();
                            return [2, this.parseResponseToWordpressPost(posts)];
                    }
                });
            });
        };
        WordPressApi.prototype.getPostsByCoin = function (categoryName) {
            return __awaiter(this, void 0, void 0, function () {
                var categoryId, response, posts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getCategoryCode(categoryName)];
                        case 1:
                            categoryId = _a.sent();
                            return [4, this.http.fetch(this.wordpressRoot + "posts?_embed&categories=" + categoryId)];
                        case 2:
                            response = _a.sent();
                            return [4, response.json()];
                        case 3:
                            posts = _a.sent();
                            return [2, this.parseResponseToWordpressPost(posts)];
                    }
                });
            });
        };
        WordPressApi.prototype.parseResponseToWordpressPost = function (posts) {
            var parsedPosts = new Array();
            posts.forEach(function (post) {
                parsedPosts.push(new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url));
            });
            return parsedPosts;
        };
        WordPressApi.prototype.getCategoryCode = function (coinName) {
            return __awaiter(this, void 0, void 0, function () {
                var response, category;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "categories?slug=" + coinName.toLowerCase())];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            category = _a.sent();
                            return [2, category[0].id];
                    }
                });
            });
        };
        return WordPressApi;
    }());
    WordPressApi = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], WordPressApi);
    exports.WordPressApi = WordPressApi;
    var WordPressPost = (function () {
        function WordPressPost(id, title, content, featuredImageSrc) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.featuredImageSrc = featuredImageSrc;
        }
        return WordPressPost;
    }());
    exports.WordPressPost = WordPressPost;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd29yZHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxZQUFZO1FBQ3JCLHNCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTVCLGtCQUFhLEdBQVcsNkNBQTZDLENBQUE7UUFGN0UsQ0FBQztRQUlZLCtCQUFRLEdBQXJCOzs7OztnQ0FDbUIsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxFQUFBOzt1Q0FBMUQsU0FBMEQ7NEJBQzdELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRVkscUNBQWMsR0FBM0IsVUFBNEIsWUFBb0I7Ozs7O2dDQUUzQixXQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUE7O3lDQUF4QyxTQUF3Qzs0QkFDMUMsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFFLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxFQUFBOzt1Q0FBbEYsU0FBa0Y7NEJBQ3JGLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRU8sbURBQTRCLEdBQXBDLFVBQXFDLEtBQUs7WUFDdEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7WUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1lBQzlJLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBRWEsc0NBQWUsR0FBN0IsVUFBOEIsUUFBZTs7Ozs7Z0NBRTFCLFdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBQTs7dUNBQXZGLFNBQXVGOzRCQUN2RixXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7dUNBQXJCLFNBQXFCOzRCQUNwQyxXQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Ozs7U0FDekI7UUFDTCxtQkFBQztJQUFELENBbkNBLEFBbUNDLElBQUE7SUFuQ1ksWUFBWTtRQUR4QiwwQkFBTSxDQUFDLGlDQUFVLENBQUM7eUNBRVcsaUNBQVU7T0FEM0IsWUFBWSxDQW1DeEI7SUFuQ1ksb0NBQVk7SUFxQ3pCO1FBQ0EsdUJBQ1csRUFBVSxFQUNWLEtBQWEsRUFDYixPQUFlLEVBQ2YsZ0JBQXdCO1lBSHhCLE9BQUUsR0FBRixFQUFFLENBQVE7WUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUNmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUFJLENBQUM7UUFFeEMsb0JBQUM7SUFBRCxDQVBBLEFBT0MsSUFBQTtJQVBZLHNDQUFhIiwiZmlsZSI6ImFwcC9hcGkvd29yZHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIFdvcmRQcmVzc0FwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3b3JkcHJlc3NSb290OiBzdHJpbmcgPSBcImh0dHA6Ly93d3cuamRyYWd0LmNvbS9LcmlwdG8vd3AtanNvbi93cC92Mi9cIiBcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0UG9zdHMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMud29yZHByZXNzUm9vdCArIFwicG9zdHM/X2VtYmVkXCIpO1xyXG4gICAgICAgIGxldCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlUmVzcG9uc2VUb1dvcmRwcmVzc1Bvc3QocG9zdHMpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFBvc3RzQnlDb2luKGNhdGVnb3J5TmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeUlkID0gYXdhaXQgdGhpcy5nZXRDYXRlZ29yeUNvZGUoY2F0ZWdvcnlOYW1lKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZmV0Y2godGhpcy53b3JkcHJlc3NSb290ICtcInBvc3RzP19lbWJlZCZjYXRlZ29yaWVzPVwiICsgY2F0ZWdvcnlJZCkgO1xyXG4gICAgICAgIGxldCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlVG9Xb3JkcHJlc3NQb3N0KHBvc3RzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VSZXNwb25zZVRvV29yZHByZXNzUG9zdChwb3N0cyl7XHJcbiAgICAgICAgbGV0IHBhcnNlZFBvc3RzID0gbmV3IEFycmF5PFdvcmRQcmVzc1Bvc3Q+KCk7XHJcbiAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcclxuICAgICAgICAgICAgcGFyc2VkUG9zdHMucHVzaChuZXcgV29yZFByZXNzUG9zdChwb3N0LmlkLCBwb3N0LnRpdGxlLnJlbmRlcmVkLCBwb3N0LmNvbnRlbnQucmVuZGVyZWQsIHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkUG9zdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYXRlZ29yeUNvZGUoY29pbk5hbWU6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgKyBcImNhdGVnb3JpZXM/c2x1Zz1cIiArIGNvaW5OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlbMF0uaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NQb3N0IHtcclxuY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZSA6c3RyaW5nLFxyXG4gICAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyBmZWF0dXJlZEltYWdlU3JjOiBzdHJpbmcgKSB7fVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app/views/overview',["require", "exports", "aurelia-framework", "app/api/wordpress", "app/api/coin", "app/api/coin-information"], function (require, exports, aurelia_framework_1, wordpress_1, coin_1, coin_information_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bitcoin = (function () {
        function Bitcoin(wordpressApi, currencyApi, identifierApi) {
            this.wordpressApi = wordpressApi;
            this.currencyApi = currencyApi;
            this.identifierApi = identifierApi;
        }
        Bitcoin.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, this.loadAllPosts()];
                        case 1:
                            _b.sent();
                            this.coinIdentifiers = this.identifierApi.GetCoinIdentifiers();
                            _a = this;
                            return [4, this.currencyApi.getCoins("EUR", this.coinIdentifiers)];
                        case 2:
                            _a.coins = _b.sent();
                            return [2];
                    }
                });
            });
        };
        Bitcoin.prototype.changeActiveCoin = function (code, name) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.wordpressApi.getPostsByCoin(name)];
                        case 1:
                            _a.posts = _b.sent();
                            this.coinIdentifiers.forEach(function (identifier) {
                                if (identifier.code === code) {
                                    identifier.active = true;
                                }
                                else {
                                    identifier.active = false;
                                }
                            });
                            return [2];
                    }
                });
            });
        };
        Bitcoin.prototype.resetActiveCoin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.loadAllPosts()];
                        case 1:
                            _a.sent();
                            this.coinIdentifiers.forEach(function (identifier) {
                                identifier.active = false;
                            });
                            return [2];
                    }
                });
            });
        };
        Bitcoin.prototype.loadAllPosts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.wordpressApi.getPosts()];
                        case 1:
                            _a.posts = _b.sent();
                            return [2];
                    }
                });
            });
        };
        return Bitcoin;
    }());
    Bitcoin = __decorate([
        aurelia_framework_1.inject(wordpress_1.WordPressApi, coin_1.CoinApi, coin_information_1.CoinInformation),
        __metadata("design:paramtypes", [wordpress_1.WordPressApi, coin_1.CoinApi, coin_information_1.CoinInformation])
    ], Bitcoin);
    exports.Bitcoin = Bitcoin;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9vdmVydmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7O0lBUWIsSUFBYSxPQUFPO1FBQ2hCLGlCQUFvQixZQUEwQixFQUFVLFdBQW9CLEVBQVUsYUFBOEI7WUFBaEcsaUJBQVksR0FBWixZQUFZLENBQWM7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBUztZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUVwSCxDQUFDO1FBS1ksMEJBQVEsR0FBckI7Ozs7O2dDQUVJLFdBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzs0QkFBekIsU0FBeUIsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7NEJBQy9ELEtBQUEsSUFBSSxDQUFBOzRCQUFTLFdBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBQTs7NEJBQXpFLEdBQUssS0FBSyxHQUFHLFNBQTRELENBQUM7Ozs7O1NBQzdFO1FBRVksa0NBQWdCLEdBQTdCLFVBQThCLElBQVksRUFBRSxJQUFZOzs7Ozs7NEJBRXBELEtBQUEsSUFBSSxDQUFBOzRCQUFVLFdBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUE7OzRCQUExRCxHQUFLLEtBQUssR0FBSSxTQUE0QyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7Z0NBQ25DLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSyxDQUFDLENBQUEsQ0FBQztvQ0FDMUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0NBQzdCLENBQUM7Z0NBQ0QsSUFBSSxDQUFDLENBQUM7b0NBQ0YsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0NBQzlCLENBQUM7NEJBQ0wsQ0FBQyxDQUFDLENBQUE7Ozs7O1NBQ0w7UUFFWSxpQ0FBZSxHQUE1Qjs7OztnQ0FDSSxXQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7NEJBQXpCLFNBQXlCLENBQUM7NEJBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtnQ0FDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxDQUFDOzs7OztTQUNOO1FBRVksOEJBQVksR0FBekI7Ozs7Ozs0QkFDSSxLQUFBLElBQUksQ0FBQTs0QkFBUyxXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUE7OzRCQUEvQyxHQUFLLEtBQUssR0FBRyxTQUFrQyxDQUFDOzs7OztTQUNuRDtRQUNMLGNBQUM7SUFBRCxDQXRDQSxBQXNDQyxJQUFBO0lBdENZLE9BQU87UUFEbkIsMEJBQU0sQ0FBQyx3QkFBWSxFQUFFLGNBQU8sRUFBRSxrQ0FBZSxDQUFDO3lDQUVULHdCQUFZLEVBQXVCLGNBQU8sRUFBeUIsa0NBQWU7T0FEM0csT0FBTyxDQXNDbkI7SUF0Q1ksMEJBQU8iLCJmaWxlIjoiYXBwL3ZpZXdzL292ZXJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBXb3JkUHJlc3NBcGksIFdvcmRQcmVzc1Bvc3QgfSBmcm9tIFwiYXBwL2FwaS93b3JkcHJlc3NcIjtcclxuaW1wb3J0IHsgQ29pbkFwaSwgQ29pbiB9IGZyb20gXCJhcHAvYXBpL2NvaW5cIjtcclxuaW1wb3J0IHsgQ29pbkluZm9ybWF0aW9uLCBDb2luSWRlbnRpZmllcn0gZnJvbSBcImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvblwiOyBcclxuXHJcblxyXG5AaW5qZWN0KFdvcmRQcmVzc0FwaSwgQ29pbkFwaSwgQ29pbkluZm9ybWF0aW9uKVxyXG5leHBvcnQgY2xhc3MgQml0Y29pbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmRwcmVzc0FwaTogV29yZFByZXNzQXBpLCBwcml2YXRlIGN1cnJlbmN5QXBpOiBDb2luQXBpLCBwcml2YXRlIGlkZW50aWZpZXJBcGk6IENvaW5JbmZvcm1hdGlvbikgeyBcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcG9zdHM6IEFycmF5PFdvcmRQcmVzc1Bvc3Q+O1xyXG4gICAgcHVibGljIGNvaW5zOiBBcnJheTxDb2luPjtcclxuICAgIHB1YmxpYyBjb2luSWRlbnRpZmllcnM6IEFycmF5PENvaW5JZGVudGlmaWVyPjtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRBbGxQb3N0cygpOyAgIFxyXG4gICAgICAgIHRoaXMuY29pbklkZW50aWZpZXJzID0gdGhpcy5pZGVudGlmaWVyQXBpLkdldENvaW5JZGVudGlmaWVycygpO1xyXG4gICAgICAgIHRoaXMuY29pbnMgPSBhd2FpdCB0aGlzLmN1cnJlbmN5QXBpLmdldENvaW5zKFwiRVVSXCIsIHRoaXMuY29pbklkZW50aWZpZXJzKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VBY3RpdmVDb2luKGNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9zdHMgPSAgYXdhaXQgdGhpcy53b3JkcHJlc3NBcGkuZ2V0UG9zdHNCeUNvaW4obmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb2luSWRlbnRpZmllcnMuZm9yRWFjaChpZGVudGlmaWVyID0+IHtcclxuICAgICAgICAgICAgaWYoaWRlbnRpZmllci5jb2RlID09PSBjb2RlICl7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzZXRBY3RpdmVDb2luKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEFsbFBvc3RzKCk7XHJcbiAgICAgICAgdGhpcy5jb2luSWRlbnRpZmllcnMuZm9yRWFjaChpZGVudGlmaWVyID0+IHtcclxuICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZEFsbFBvc3RzKCl7XHJcbiAgICAgICAgdGhpcy5wb3N0cyA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RzKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=bootstrap/css/bootstrap.css></require><require from=./styles.css></require><router-view></router-view></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = ".nav li:hover{\r\n    cursor: pointer;\r\n}\r\n.tr-clickable:hover\r\n{\r\n    background: #eee;\r\n    cursor: pointer;\r\n}\r\n"; });
define('text!app/views/overview.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-inverse\" style=border-radius:0><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=# click.delegate=resetActiveCoin()>Kripto</a></div><ul class=\"nav navbar-nav\"><li repeat.for=\"identifier of coinIdentifiers\" class=\"${identifier.active ? 'active' : ''}\" click.delegate=\"changeActiveCoin(identifier.code, identifier.name)\"><a>${identifier.name}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=#><span style=margin-right:10px class=\"glyphicon glyphicon-earphone\"></span>Contact</a></li></ul></div></nav><div class=container-fluid><div class=row><div class=col-md-6><div class=list-group><div repeat.for=\"post of posts\" class=list-group-item><div if.bind=$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h1>${post.title}</h1></div><div class=col-md-12 innerhtml=${post.content} style=padding-top:10px></div></div><div if.bind=!$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4 d-flex align-items-center\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h3>${post.title}</h3></div></div></div></div></div><div class=\"col-md-6 list-group\"><table class=\"table table-bordered\"><thead><tr><th>Naam</th><th>Prijs</th><th>Verschil 24H</th></tr></thead><tbody><tr repeat.for=\"coin of coins\" click.delegate=\"changeActiveCoin(coin.code, coin.name)\" class=tr-clickable><td><img src=\"${coin.imageUrl}?width=32&height=32\"> ${coin.name}</td><td>${coin.price}</td><td>${coin.percentChange}%</td></tr></tbody></table></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map