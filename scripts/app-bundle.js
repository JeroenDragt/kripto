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
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.options.root = "/";
            config.map([
                { route: 'buyandcompare', name: 'buyandcompare', moduleId: 'app/views/buyandcompare' },
                { route: '', name: 'home', moduleId: 'app/views/overview' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router),
        __metadata("design:paramtypes", [aurelia_router_1.Router])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLEdBQUc7UUFDZCxhQUFvQixNQUFjO1lBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVsQyxDQUFDO1FBQ0QsNkJBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsTUFBTTtZQUU1QixNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUUsR0FBRyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2dCQUN0RixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7YUFFNUQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLHVCQUFNLENBQUM7eUNBRWUsdUJBQU07T0FEdkIsR0FBRyxDQWdCZjtJQWhCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuXG5AaW5qZWN0KFJvdXRlcilcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcbiAgICBjb25maWcub3B0aW9ucy5yb290ID1cIi9cIjtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICdidXlhbmRjb21wYXJlJywgbmFtZTogJ2J1eWFuZGNvbXBhcmUnLCBtb2R1bGVJZDogJ2FwcC92aWV3cy9idXlhbmRjb21wYXJlJyB9LFxuICAgICAgeyByb3V0ZTogJycsIG5hbWU6ICdob21lJywgbW9kdWxlSWQ6ICdhcHAvdmlld3Mvb3ZlcnZpZXcnIH1cbiAgICAgIFxuICAgIF0pO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBYkQsOEJBYUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOztJQUViO1FBQUE7WUFDVyxZQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1lBQ25HLGFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7WUFDdEcsYUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsNkRBQTZELENBQUMsQ0FBQztZQUNoSCxnQkFBVyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsb0RBQW9ELENBQUMsQ0FBQztZQUM5RyxXQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1FBTTdHLENBQUM7UUFIVSw0Q0FBa0IsR0FBekI7WUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0RixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLDBDQUFlO0lBYTVCO1FBRUksd0JBQW1CLElBQVksRUFDcEIsSUFBWSxFQUNaLFFBQWdCO1lBRlIsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUNwQixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQixDQUFDO1FBQ1oscUJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLHdDQUFjIiwiZmlsZSI6ImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW5JbmZvcm1hdGlvbiB7XHJcbiAgICBwdWJsaWMgYml0Y29pbiA9IG5ldyBDb2luSWRlbnRpZmllcihcIkJpdGNvaW5cIiwgXCJCVENcIiwgXCJodHRwOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzE5NjMzL2J0Yy5wbmdcIik7XHJcbiAgICBwdWJsaWMgZXRoZXJldW0gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJFdGhlcmV1bVwiLCBcIkVUSFwiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzIwNjQ2L2V0aC5wbmdcIik7XHJcbiAgICBwdWJsaWMgbGl0ZWNvaW4gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJMaXRlY29pblwiLCBcIkxUQ1wiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzE5NzgyL2xpdGVjb2luLWxvZ28ucG5nXCIpO1xyXG4gICAgcHVibGljIGRpZ2l0YWxDYXNoID0gbmV3IENvaW5JZGVudGlmaWVyKFwiRGlnaXRhbENhc2hcIiwgXCJEQVNIXCIsIFwiaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20vbWVkaWEvMjA2MjYvZGFzaC5wbmdcIik7XHJcbiAgICBwdWJsaWMgbW9uZXJvID0gbmV3IENvaW5JZGVudGlmaWVyKFwiTW9uZXJvXCIsIFwiWE1SXCIsIFwiaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20vbWVkaWEvMTk5NjkveG1yLnBuZ1wiKTtcclxuXHJcblxyXG4gICAgcHVibGljIEdldENvaW5JZGVudGlmaWVycygpOiBBcnJheTxDb2luSWRlbnRpZmllcj4ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5iaXRjb2luLCB0aGlzLmV0aGVyZXVtLCB0aGlzLmxpdGVjb2luLCB0aGlzLmRpZ2l0YWxDYXNoLCB0aGlzLm1vbmVyb11cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvaW5JZGVudGlmaWVyIHsgXHJcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjb2RlOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgKSB7fVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
                                var parsedCoin = new CoinTableRow(c.code, c.name, result.PRICE, result.CHANGEPCT24HOUR, c.imageUrl);
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
    var CoinTableRow = (function () {
        function CoinTableRow(code, name, price, percentChange, imageUrl) {
            this.code = code;
            this.name = name;
            this.price = price;
            this.percentChange = percentChange;
            this.imageUrl = imageUrl;
            this.active = false;
        }
        return CoinTableRow;
    }());
    exports.CoinTableRow = CoinTableRow;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsT0FBTztRQUNoQixpQkFBb0IsSUFBZ0I7WUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUk1QixZQUFPLEdBQVcsd0RBQXdELENBQUE7UUFGbEYsQ0FBQztRQUdZLDBCQUFRLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxLQUE0Qjs7Z0NBRTFELFdBQVcsa0JBSVgsV0FBVzs7O2dDQUxFLFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFBOzt5Q0FBckMsU0FBcUM7MENBQ3BDLFNBQVMsR0FBRyxNQUFNOzRCQUNyQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxFQUFBOzt1Q0FBOUQsU0FBOEQ7NEJBQ2xFLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBcUI7MENBRWQsSUFBSSxLQUFLLEVBQWdCOzRCQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQ0FDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDekMsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3BHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ2pDLENBQUMsQ0FBQyxDQUFBOzRCQUNGLFdBQU8sV0FBVyxFQUFDOzs7O1NBQ3RCO1FBRU8scUNBQW1CLEdBQTNCLFVBQTRCLEtBQTRCO1lBQ3BELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQ1QsQ0FBQztvQkFDRyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUEsQ0FBQztvQkFDRCxXQUFXLElBQUksR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQXJDQSxBQXFDQyxJQUFBO0lBckNZLE9BQU87UUFEbkIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLE9BQU8sQ0FxQ25CO0lBckNZLDBCQUFPO0lBdUNwQjtRQUVJLHNCQUNPLElBQVksRUFDWixJQUFZLEVBQ1osS0FBYSxFQUNiLGFBQXFCLEVBQ3JCLFFBQWdCO1lBSmhCLFNBQUksR0FBSixJQUFJLENBQVE7WUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNiLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1lBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVE7WUFOaEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU83QixDQUFDO1FBQ1AsbUJBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLG9DQUFZIiwiZmlsZSI6ImFwcC9hcGkvY29pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcbmltcG9ydCB7IENvaW5JZGVudGlmaWVyIH0gZnJvbSBcImFwcC9hcGkvY29pbi1pbmZvcm1hdGlvblwiIFxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBDb2luQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJvb3RVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9taW4tYXBpLmNyeXB0b2NvbXBhcmUuY29tL2RhdGEvcHJpY2VtdWx0aWZ1bGw/XCJcclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb2lucyh2YWx1dGE6IHN0cmluZywgY29pbnM6IEFycmF5PENvaW5JZGVudGlmaWVyPikge1xyXG4gICAgICAgIGxldCBjb2luc1F1ZXJ5ID0gYXdhaXQgdGhpcy5nZXRDb2luc1F1ZXJ5U3RyaW5nKGNvaW5zKTtcclxuICAgICAgICBsZXQgdmFsdXRhUXVlcnkgPSBcIiZ0c3ltcz1cIiArIHZhbHV0YTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZmV0Y2godGhpcy5yb290VXJsICsgY29pbnNRdWVyeSArIHZhbHV0YVF1ZXJ5KTtcclxuICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICBsZXQgcGFyc2VkQ29pbnMgPSBuZXcgQXJyYXk8Q29pblRhYmxlUm93PigpO1xyXG4gICAgICAgIGNvaW5zLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBqc29uLkRJU1BMQVlbYy5jb2RlXVt2YWx1dGFdICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRDb2luID0gbmV3IENvaW5UYWJsZVJvdyhjLmNvZGUsIGMubmFtZSwgcmVzdWx0LlBSSUNFLCByZXN1bHQuQ0hBTkdFUENUMjRIT1VSLCBjLmltYWdlVXJsKTtcclxuICAgICAgICAgICAgcGFyc2VkQ29pbnMucHVzaChwYXJzZWRDb2luKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJzZWRDb2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvaW5zUXVlcnlTdHJpbmcoY29pbnM6IEFycmF5PENvaW5JZGVudGlmaWVyPikge1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiZnN5bXM9XCI7XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICBpZihmaXJzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gY29pbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCIsXCIgK2NvaW4uY29kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2luVGFibGVSb3cge1xyXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nLFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBwcmljZTogc3RyaW5nLFxyXG4gICAgcHVibGljIHBlcmNlbnRDaGFuZ2U6IG51bWJlcixcclxuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nXHJcbiAgICApe31cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        WordPressApi.prototype.getPostById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var response, post;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "posts?_embed&" + id)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            post = _a.sent();
                            return [2, new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url)];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd29yZHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxZQUFZO1FBQ3JCLHNCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTVCLGtCQUFhLEdBQVcsNkNBQTZDLENBQUE7UUFGN0UsQ0FBQztRQUlZLCtCQUFRLEdBQXJCOzs7OztnQ0FDbUIsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxFQUFBOzt1Q0FBMUQsU0FBMEQ7NEJBQzdELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRVkscUNBQWMsR0FBM0IsVUFBNEIsWUFBb0I7Ozs7O2dDQUUzQixXQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUE7O3lDQUF4QyxTQUF3Qzs0QkFDMUMsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFFLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxFQUFBOzt1Q0FBbEYsU0FBa0Y7NEJBQ3JGLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRVksa0NBQVcsR0FBeEIsVUFBeUIsRUFBVTs7Ozs7Z0NBQ2hCLFdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRSxlQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUE7O3VDQUEvRCxTQUErRDs0QkFDbkUsV0FBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O21DQUFyQixTQUFxQjs0QkFDaEMsV0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQzs7OztTQUNuSTtRQUVPLG1EQUE0QixHQUFwQyxVQUFxQyxLQUFLO1lBQ3RDLElBQUksV0FBVyxHQUFHLElBQUksS0FBSyxFQUFpQixDQUFDO1lBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtZQUM5SSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVhLHNDQUFlLEdBQTdCLFVBQThCLFFBQWU7Ozs7O2dDQUUxQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUE7O3VDQUF2RixTQUF1Rjs0QkFDdkYsV0FBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3VDQUFyQixTQUFxQjs0QkFDcEMsV0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O1NBQ3pCO1FBQ0wsbUJBQUM7SUFBRCxDQXpDQSxBQXlDQyxJQUFBO0lBekNZLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLFlBQVksQ0F5Q3hCO0lBekNZLG9DQUFZO0lBMkN6QjtRQUNBLHVCQUNXLEVBQVUsRUFDVixLQUFhLEVBQ2IsT0FBZSxFQUNmLGdCQUF3QjtZQUh4QixPQUFFLEdBQUYsRUFBRSxDQUFRO1lBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNiLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFBSSxDQUFDO1FBRXhDLG9CQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxzQ0FBYSIsImZpbGUiOiJhcHAvYXBpL3dvcmRwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NBcGkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd29yZHByZXNzUm9vdDogc3RyaW5nID0gXCJodHRwOi8vd3d3LmpkcmFndC5jb20vS3JpcHRvL3dwLWpzb24vd3AvdjIvXCIgXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFBvc3RzKCkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgKyBcInBvc3RzP19lbWJlZFwiKTtcclxuICAgICAgICBsZXQgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlVG9Xb3JkcHJlc3NQb3N0KHBvc3RzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRQb3N0c0J5Q29pbihjYXRlZ29yeU5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGF3YWl0IHRoaXMuZ2V0Q2F0ZWdvcnlDb2RlKGNhdGVnb3J5TmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMud29yZHByZXNzUm9vdCArXCJwb3N0cz9fZW1iZWQmY2F0ZWdvcmllcz1cIiArIGNhdGVnb3J5SWQpIDtcclxuICAgICAgICBsZXQgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSZXNwb25zZVRvV29yZHByZXNzUG9zdChwb3N0cylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0UG9zdEJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgK1wicG9zdHM/X2VtYmVkJlwiICsgaWQpO1xyXG4gICAgICAgIGxldCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBuZXcgV29yZFByZXNzUG9zdChwb3N0LmlkLCBwb3N0LnRpdGxlLnJlbmRlcmVkLCBwb3N0LmNvbnRlbnQucmVuZGVyZWQsIHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUmVzcG9uc2VUb1dvcmRwcmVzc1Bvc3QocG9zdHMpe1xyXG4gICAgICAgIGxldCBwYXJzZWRQb3N0cyA9IG5ldyBBcnJheTxXb3JkUHJlc3NQb3N0PigpO1xyXG4gICAgICAgIHBvc3RzLmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIHBhcnNlZFBvc3RzLnB1c2gobmV3IFdvcmRQcmVzc1Bvc3QocG9zdC5pZCwgcG9zdC50aXRsZS5yZW5kZXJlZCwgcG9zdC5jb250ZW50LnJlbmRlcmVkLCBwb3N0Ll9lbWJlZGRlZFtcIndwOmZlYXR1cmVkbWVkaWFcIl1bMF0uc291cmNlX3VybCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFBvc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2F0ZWdvcnlDb2RlKGNvaW5OYW1lOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZmV0Y2godGhpcy53b3JkcHJlc3NSb290ICsgXCJjYXRlZ29yaWVzP3NsdWc9XCIgKyBjb2luTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5WzBdLmlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV29yZFByZXNzUG9zdCB7XHJcbmNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGUgOnN0cmluZyxcclxuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZmVhdHVyZWRJbWFnZVNyYzogc3RyaW5nICkge31cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('app/views/buyandcompare',["require", "exports", "aurelia-framework", "app/api/websites/coinbase/coinbase", "app/api/websites/bitrush/bitrush"], function (require, exports, aurelia_framework_1, coinbase_1, bitrush_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuyAndCompare = (function () {
        function BuyAndCompare(bitrushApi, coinBaseApi) {
            this.bitrushApi = bitrushApi;
            this.coinBaseApi = coinBaseApi;
            this.coins = new Array();
        }
        BuyAndCompare.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
                return __generator(this, function (_q) {
                    switch (_q.label) {
                        case 0:
                            url = "https://api.bitrush.nl/v1/products";
                            _b = (_a = this.coins).push;
                            return [4, this.bitrushApi.getBitcoinPrice()];
                        case 1:
                            _b.apply(_a, [_q.sent()]);
                            _d = (_c = this.coins).push;
                            return [4, this.bitrushApi.getLiteCoinPrice()];
                        case 2:
                            _d.apply(_c, [_q.sent()]);
                            _f = (_e = this.coins).push;
                            return [4, this.bitrushApi.getEthereumPrice()];
                        case 3:
                            _f.apply(_e, [_q.sent()]);
                            _h = (_g = this.coins).push;
                            return [4, this.bitrushApi.getDigitalCashPrice()];
                        case 4:
                            _h.apply(_g, [_q.sent()]);
                            _k = (_j = this.coins).push;
                            return [4, this.coinBaseApi.getBitcoinPrice()];
                        case 5:
                            _k.apply(_j, [_q.sent()]);
                            _m = (_l = this.coins).push;
                            return [4, this.coinBaseApi.getLiteCoinPrice()];
                        case 6:
                            _m.apply(_l, [_q.sent()]);
                            _p = (_o = this.coins).push;
                            return [4, this.coinBaseApi.getEthereumPrice()];
                        case 7:
                            _p.apply(_o, [_q.sent()]);
                            return [4, this.coinBaseApi.getBitcoinPrice()];
                        case 8:
                            _q.sent();
                            return [2];
                    }
                });
            });
        };
        return BuyAndCompare;
    }());
    BuyAndCompare = __decorate([
        aurelia_framework_1.inject(bitrush_1.BitRushApi, coinbase_1.CoinBaseApi),
        __metadata("design:paramtypes", [bitrush_1.BitRushApi, coinbase_1.CoinBaseApi])
    ], BuyAndCompare);
    exports.BuyAndCompare = BuyAndCompare;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9idXlhbmRjb21wYXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUUEsSUFBYSxhQUFhO1FBRXRCLHVCQUFvQixVQUFzQixFQUFVLFdBQXdCO1lBQXhELGVBQVUsR0FBVixVQUFVLENBQVk7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUNwRSxVQUFLLEdBQTRCLElBQUksS0FBSyxFQUFvQixDQUFDO1FBRFEsQ0FBQztRQUVuRSxnQ0FBUSxHQUFyQjs7b0JBR1EsR0FBRzs7OztrQ0FBRyxvQ0FBb0M7NEJBRTlDLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxJQUFJLENBQUE7NEJBQUUsV0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxFQUFBOzs0QkFBeEQsY0FBaUIsU0FBdUMsRUFBQyxDQUFBOzRCQUN6RCxLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSxDQUFBOzRCQUFFLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzs0QkFBekQsY0FBaUIsU0FBd0MsRUFBQyxDQUFBOzRCQUMxRCxLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSxDQUFBOzRCQUFFLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzs0QkFBekQsY0FBaUIsU0FBd0MsRUFBQyxDQUFBOzRCQUMxRCxLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSxDQUFBOzRCQUFFLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOzs0QkFBNUQsY0FBaUIsU0FBMkMsRUFBQyxDQUFBOzRCQUM3RCxLQUFBLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSxDQUFBOzRCQUFFLFdBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7NEJBQXpELGNBQWlCLFNBQXdDLEVBQUMsQ0FBQTs0QkFDMUQsS0FBQSxDQUFBLEtBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLElBQUksQ0FBQTs0QkFBRSxXQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7NEJBQTFELGNBQWlCLFNBQXlDLEVBQUMsQ0FBQTs0QkFDM0QsS0FBQSxDQUFBLEtBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLElBQUksQ0FBQTs0QkFBRSxXQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7NEJBQTFELGNBQWlCLFNBQXlDLEVBQUMsQ0FBQTs0QkFFM0QsV0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFBOzs0QkFBeEMsU0FBd0MsQ0FBQzs7Ozs7U0FVNUM7UUFDTCxvQkFBQztJQUFELENBNUJBLEFBNEJDLElBQUE7SUE1QlksYUFBYTtRQUR6QiwwQkFBTSxDQUFDLG9CQUFVLEVBQUUsc0JBQVcsQ0FBQzt5Q0FHSSxvQkFBVSxFQUF1QixzQkFBVztPQUZuRSxhQUFhLENBNEJ6QjtJQTVCWSxzQ0FBYSIsImZpbGUiOiJhcHAvdmlld3MvYnV5YW5kY29tcGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG4vL2ltcG9ydCB7IEFueUNvaW5EaXJlY3RBcGkgfSBmcm9tIFwiYXBwL2FwaS93ZWJzaXRlcy9hbnljb2luZGlyZWN0L2FueWNvaW5kaXJlY3RcIjtcclxuaW1wb3J0IHsgQ29pbkJhc2VBcGkgfSBmcm9tIFwiYXBwL2FwaS93ZWJzaXRlcy9jb2luYmFzZS9jb2luYmFzZVwiO1xyXG5pbXBvcnQgeyBXZWJzaXRlQ29pblZhbHVlIH0gZnJvbSBcImFwcC9hcGkvd2Vic2l0ZXMvd2Vic2l0ZUNvaW5WYWx1ZVwiO1xyXG4vLyBpbXBvcnQgeyBCaXRvbmljQXBpIH0gZnJvbSBcImFwcC9hcGkvd2Vic2l0ZXMvYml0b25pYy9iaXRvbmljXCJcclxuaW1wb3J0IHsgQml0UnVzaEFwaSB9IGZyb20gXCJhcHAvYXBpL3dlYnNpdGVzL2JpdHJ1c2gvYml0cnVzaFwiO1xyXG5cclxuQGluamVjdChCaXRSdXNoQXBpLCBDb2luQmFzZUFwaSlcclxuZXhwb3J0IGNsYXNzIEJ1eUFuZENvbXBhcmUge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpdHJ1c2hBcGk6IEJpdFJ1c2hBcGksIHByaXZhdGUgY29pbkJhc2VBcGk6IENvaW5CYXNlQXBpKSB7fVxyXG4gICAgcHJpdmF0ZSBjb2luczogQXJyYXk8V2Vic2l0ZUNvaW5WYWx1ZT4gPSBuZXcgQXJyYXk8V2Vic2l0ZUNvaW5WYWx1ZT4oKTtcclxuICAgIHB1YmxpYyBhc3luYyBhY3RpdmF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYml0cnVzaC5ubC92MS9wcm9kdWN0c1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29pbnMucHVzaCggYXdhaXQgdGhpcy5iaXRydXNoQXBpLmdldEJpdGNvaW5QcmljZSgpKVxyXG4gICAgICAgIHRoaXMuY29pbnMucHVzaCggYXdhaXQgdGhpcy5iaXRydXNoQXBpLmdldExpdGVDb2luUHJpY2UoKSlcclxuICAgICAgICB0aGlzLmNvaW5zLnB1c2goIGF3YWl0IHRoaXMuYml0cnVzaEFwaS5nZXRFdGhlcmV1bVByaWNlKCkpXHJcbiAgICAgICAgdGhpcy5jb2lucy5wdXNoKCBhd2FpdCB0aGlzLmJpdHJ1c2hBcGkuZ2V0RGlnaXRhbENhc2hQcmljZSgpKVxyXG4gICAgICAgIHRoaXMuY29pbnMucHVzaCggYXdhaXQgdGhpcy5jb2luQmFzZUFwaS5nZXRCaXRjb2luUHJpY2UoKSlcclxuICAgICAgICB0aGlzLmNvaW5zLnB1c2goIGF3YWl0IHRoaXMuY29pbkJhc2VBcGkuZ2V0TGl0ZUNvaW5QcmljZSgpKVxyXG4gICAgICAgIHRoaXMuY29pbnMucHVzaCggYXdhaXQgdGhpcy5jb2luQmFzZUFwaS5nZXRFdGhlcmV1bVByaWNlKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb2luQmFzZUFwaS5nZXRCaXRjb2luUHJpY2UoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb2lucyA9IG5ldyBBcnJheTxXZWJzaXRlQ29pblZhbHVlPigpO1xyXG4gICAgICAgIC8vIHRoaXMuY29pbnMucHVzaChhd2FpdCB0aGlzLmJpdG9uaWNBcGkuZ2V0SWRlYWxQcmljZShcImJ0Y1wiKSk7ICAgICBcclxuICAgICAgICAvLyB0aGlzLmNvaW5zLnB1c2goYXdhaXQgdGhpcy5idGNkaXJlY3RBcGkuZ2V0SWRlYWxQcmljZShcImJ0Y1wiKSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2lucy5wdXNoKGF3YWl0IHRoaXMuYnRjZGlyZWN0QXBpLmdldElkZWFsUHJpY2UoXCJldGhcIikpO1xyXG4gICAgICAgIC8vIHRoaXMuY29pbnMucHVzaChhd2FpdCB0aGlzLmJ0Y2RpcmVjdEFwaS5nZXRJZGVhbFByaWNlKFwibHRjXCIpKTtcclxuICAgICAgICAvLyB0aGlzLmNvaW5zLnB1c2goYXdhaXQgdGhpcy5idGNkaXJlY3RBcGkuZ2V0SWRlYWxQcmljZShcInhtclwiKSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2lucy5wdXNoKGF3YWl0IHRoaXMuYnRjZGlyZWN0QXBpLmdldElkZWFsUHJpY2UoXCJkYXNoXCIpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('app/views/overview',["require", "exports", "aurelia-framework", "app/api/coin-information"], function (require, exports, aurelia_framework_1, coin_information_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Overview = (function () {
        function Overview(identifierApi) {
            this.identifierApi = identifierApi;
        }
        Overview.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.coinIdentifiers = this.identifierApi.GetCoinIdentifiers();
                    return [2];
                });
            });
        };
        Overview.prototype.changeActiveCoin = function (coinIdentifier) {
            this.activeCoin = coinIdentifier;
        };
        Overview.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            this.coinIdentifiers.forEach(function (identifier) {
                if (identifier.code === newValue.code) {
                    identifier.active = true;
                }
                else {
                    identifier.active = false;
                }
            });
        };
        Overview.prototype.resetActiveCoin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.coinIdentifiers.forEach(function (identifier) {
                        identifier.active = false;
                    });
                    return [2];
                });
            });
        };
        return Overview;
    }());
    Overview = __decorate([
        aurelia_framework_1.inject(coin_information_1.CoinInformation),
        __metadata("design:paramtypes", [coin_information_1.CoinInformation])
    ], Overview);
    exports.Overview = Overview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9vdmVydmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7O0lBTWIsSUFBYSxRQUFRO1FBQ2pCLGtCQUFvQixhQUE4QjtZQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFFbEQsQ0FBQztRQUtZLDJCQUFRLEdBQXJCOzs7b0JBR0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7U0FFbEU7UUFFTSxtQ0FBZ0IsR0FBdkIsVUFBd0IsY0FBOEI7WUFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7UUFDckMsQ0FBQztRQUVNLDhDQUEyQixHQUFsQyxVQUFtQyxRQUFRLEVBQUUsUUFBUTtZQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7Z0JBQ25DLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUssQ0FBQyxDQUFBLENBQUM7b0JBQ25DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRVksa0NBQWUsR0FBNUI7OztvQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7d0JBQ25DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQzs7OztTQUNOO1FBRUwsZUFBQztJQUFELENBckNBLEFBcUNDLElBQUE7SUFyQ1ksUUFBUTtRQURwQiwwQkFBTSxDQUFDLGtDQUFlLENBQUM7eUNBRWUsa0NBQWU7T0FEekMsUUFBUSxDQXFDcEI7SUFyQ1ksNEJBQVEiLCJmaWxlIjoiYXBwL3ZpZXdzL292ZXJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBDb2luSW5mb3JtYXRpb24sIENvaW5JZGVudGlmaWVyfSBmcm9tIFwiYXBwL2FwaS9jb2luLWluZm9ybWF0aW9uXCI7IFxyXG5cclxuXHJcbkBpbmplY3QoQ29pbkluZm9ybWF0aW9uKVxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpZGVudGlmaWVyQXBpOiBDb2luSW5mb3JtYXRpb24pIHsgXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY29pbklkZW50aWZpZXJzOiBBcnJheTxDb2luSWRlbnRpZmllcj47XHJcbiAgICBwdWJsaWMgYWN0aXZlQ29pbjogQ29pbklkZW50aWZpZXI7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy9hd2FpdCB0aGlzLmxvYWRBbGxQb3N0cygpOyBcclxuICAgICAgICB0aGlzLmNvaW5JZGVudGlmaWVycyA9IHRoaXMuaWRlbnRpZmllckFwaS5HZXRDb2luSWRlbnRpZmllcnMoKTtcclxuICAgICAgICAvL3RoaXMuY29pblRhYmxlUm93cyA9IGF3YWl0IHRoaXMuY3VycmVuY3lBcGkuZ2V0Q29pbnMoXCJFVVJcIiwgdGhpcy5jb2luSWRlbnRpZmllcnMpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VBY3RpdmVDb2luKGNvaW5JZGVudGlmaWVyOiBDb2luSWRlbnRpZmllcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNvaW4gPSBjb2luSWRlbnRpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlQ29pbklkZW50aWZpZXJDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29pbklkZW50aWZpZXJzLmZvckVhY2goaWRlbnRpZmllciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlkZW50aWZpZXIuY29kZSA9PT0gbmV3VmFsdWUuY29kZSApe1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlc2V0QWN0aXZlQ29pbigpIHtcclxuICAgICAgICB0aGlzLmNvaW5JZGVudGlmaWVycy5mb3JFYWNoKGlkZW50aWZpZXIgPT4ge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL2NvaW5zL2JpdGNvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("app/api/coins/bitcoin", [],function(){});

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL2NvaW5zL2xpdGVjb2luLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define("app/api/coins/litecoin", [],function(){});

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL2NvaW5zL21vbmVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("app/api/coins/monero", [],function(){});

define('app/api/websites/websiteCoinValue',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebsiteCoinValue = (function () {
        function WebsiteCoinValue(websiteName, coinName, coinPrice) {
            this.websiteName = websiteName;
            this.coinName = coinName;
            this.coinPrice = coinPrice;
        }
        return WebsiteCoinValue;
    }());
    exports.WebsiteCoinValue = WebsiteCoinValue;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd2Vic2l0ZXMvd2Vic2l0ZUNvaW5WYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUNJLDBCQUNPLFdBQW1CLEVBQ25CLFFBQWdCLEVBQ2hCLFNBQWlCO1lBRmpCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBQ25CLGFBQVEsR0FBUixRQUFRLENBQVE7WUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUN0QixDQUFDO1FBQ1AsdUJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLDRDQUFnQiIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL3dlYnNpdGVDb2luVmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2Vic2l0ZUNvaW5WYWx1ZSB7XHJcbiAgICBjb25zdHJ1Y3RvciggICAgXHJcbiAgICBwdWJsaWMgd2Vic2l0ZU5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBjb2luTmFtZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGNvaW5QcmljZTogbnVtYmVyXHJcbiAgICApe31cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvdmlld3MvbmV3cy9hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define("app/views/news/article", [],function(){});

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
define('app/views/news/news',["require", "exports", "aurelia-framework", "app/api/coin-information", "app/api/wordpress"], function (require, exports, aurelia_framework_1, coin_information_1, wordpress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var News = (function () {
        function News(wordpressApi) {
            this.wordpressApi = wordpressApi;
            this.articleId = "";
            this.posts = new Array();
        }
        News.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.articleId) {
                        this.wordpressApi.getPostById(this.articleId);
                    }
                    else {
                        this.loadPosts();
                    }
                    return [2];
                });
            });
        };
        News.prototype.loadPosts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this.activeCoinIdentifier) return [3, 2];
                            debugger;
                            _a = this;
                            return [4, this.wordpressApi.getPostsByCoin(this.activeCoinIdentifier.name)];
                        case 1:
                            _a.posts = _c.sent();
                            return [3, 4];
                        case 2:
                            _b = this;
                            return [4, this.wordpressApi.getPosts()];
                        case 3:
                            _b.posts = _c.sent();
                            _c.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        News.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            this.loadPosts();
        };
        return News;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], News.prototype, "articleId", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", coin_information_1.CoinIdentifier)
    ], News.prototype, "activeCoinIdentifier", void 0);
    News = __decorate([
        aurelia_framework_1.inject(wordpress_1.WordPressApi),
        __metadata("design:paramtypes", [wordpress_1.WordPressApi])
    ], News);
    exports.News = News;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9uZXdzL25ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLElBQUk7UUFLYixjQUFvQixZQUEwQjtZQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztZQUo3QixjQUFTLEdBQVcsRUFBRSxDQUFDO1lBRWhDLFVBQUssR0FBeUIsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFFaEIsQ0FBQztRQUVyQyx1QkFBUSxHQUFyQjs7O29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2xELENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixDQUFDOzs7O1NBQ0o7UUFFYSx3QkFBUyxHQUF2Qjs7Ozs7O2lDQUVRLElBQUksQ0FBQyxvQkFBb0IsRUFBekIsY0FBeUI7NEJBQ3pCLFFBQVEsQ0FBQzs0QkFDVCxLQUFBLElBQUksQ0FBQTs0QkFBUyxXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7NEJBQW5GLEdBQUssS0FBSyxHQUFHLFNBQXNFLENBQUM7Ozs0QkFFcEYsS0FBQSxJQUFJLENBQUE7NEJBQVMsV0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFBOzs0QkFBL0MsR0FBSyxLQUFLLEdBQUcsU0FBa0MsQ0FBQzs7Ozs7O1NBRXZEO1FBRU8sMENBQTJCLEdBQW5DLFVBQW9DLFFBQVEsRUFBRSxRQUFRO1lBQ2xELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDO1FBQ0wsV0FBQztJQUFELENBN0JBLEFBNkJDLElBQUE7SUE1QmE7UUFBVCw0QkFBUTs7MkNBQStCO0lBQzlCO1FBQVQsNEJBQVE7a0NBQThCLGlDQUFjO3NEQUFDO0lBRjdDLElBQUk7UUFEaEIsMEJBQU0sQ0FBQyx3QkFBWSxDQUFDO3lDQU1pQix3QkFBWTtPQUxyQyxJQUFJLENBNkJoQjtJQTdCWSxvQkFBSSIsImZpbGUiOiJhcHAvdmlld3MvbmV3cy9uZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXJ9IGZyb20gXCJhcHAvYXBpL2NvaW4taW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHsgV29yZFByZXNzQXBpLCBXb3JkUHJlc3NQb3N0IH0gZnJvbSBcImFwcC9hcGkvd29yZHByZXNzXCI7XHJcblxyXG5AaW5qZWN0KFdvcmRQcmVzc0FwaSlcclxuZXhwb3J0IGNsYXNzIE5ld3Mge1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBhcnRpY2xlSWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAYmluZGFibGUgcHVibGljIGFjdGl2ZUNvaW5JZGVudGlmaWVyOiBDb2luSWRlbnRpZmllcjtcclxuICAgIHByaXZhdGUgcG9zdHM6IEFycmF5PFdvcmRQcmVzc1Bvc3Q+ID0gbmV3IEFycmF5PFdvcmRQcmVzc1Bvc3Q+KCk7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkQXJ0aWNsZTogV29yZFByZXNzUG9zdDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd29yZHByZXNzQXBpOiBXb3JkUHJlc3NBcGkpIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFydGljbGVJZCkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmRwcmVzc0FwaS5nZXRQb3N0QnlJZCh0aGlzLmFydGljbGVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQb3N0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQb3N0cygpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVDb2luSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RzQnlDb2luKHRoaXMuYWN0aXZlQ29pbklkZW50aWZpZXIubmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlQ29pbklkZW50aWZpZXJDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMubG9hZFBvc3RzKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL2FueWNvaW5kaXJlY3QvYW55Y29pbmRpcmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("app/api/websites/anycoindirect/anycoindirect", [],function(){});

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL2JpdG9uaWMvYml0b25pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("app/api/websites/bitonic/bitonic", [],function(){});

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
define('app/api/websites/bitrush/bitrush',["require", "exports", "aurelia-framework", "aurelia-fetch-client", "app/api/websites/websiteCoinValue"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, websiteCoinValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BitRushApi = (function () {
        function BitRushApi(http) {
            this.http = http;
            this.root = "https://api.bitrush.nl/v1/products";
        }
        BitRushApi.prototype.getPrice = function (coinCode) {
            return __awaiter(this, void 0, void 0, function () {
                var response, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.root + "/EUR-" + coinCode)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            json = _a.sent();
                            return [2, new websiteCoinValue_1.WebsiteCoinValue("Bitrush", json.coin_currency, json.ask)];
                    }
                });
            });
        };
        BitRushApi.prototype.getBitcoinPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                var coin;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("XBT")];
                        case 1:
                            coin = _a.sent();
                            coin.coinName = "BTC";
                            return [2, coin];
                    }
                });
            });
        };
        BitRushApi.prototype.getLiteCoinPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("LTC")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        BitRushApi.prototype.getDigitalCashPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("DASH")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        BitRushApi.prototype.getEthereumPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("ETH")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        return BitRushApi;
    }());
    BitRushApi = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], BitRushApi);
    exports.BitRushApi = BitRushApi;
    var BitRushCoin = (function () {
        function BitRushCoin() {
        }
        return BitRushCoin;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd2Vic2l0ZXMvYml0cnVzaC9iaXRydXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxVQUFVO1FBQ25CLG9CQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTdCLFNBQUksR0FBRyxvQ0FBb0MsQ0FBQztRQUZuRCxDQUFDO1FBS2EsNkJBQVEsR0FBdEIsVUFBdUIsUUFBZ0I7Ozs7O2dDQUNoQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBRSxFQUFBOzt1Q0FBdEQsU0FBc0Q7NEJBQzFELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBb0M7NEJBQy9DLFdBQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7Ozs7U0FDNUU7UUFFWSxvQ0FBZSxHQUE1Qjs7Ozs7Z0NBQ2UsV0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzttQ0FBMUIsU0FBMEI7NEJBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzRCQUN0QixXQUFPLElBQUksRUFBQzs7OztTQUNmO1FBRVkscUNBQWdCLEdBQTdCOzs7O2dDQUNXLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQTtnQ0FBakMsV0FBTyxTQUEwQixFQUFDOzs7O1NBQ3JDO1FBRVksd0NBQW1CLEdBQWhDOzs7O2dDQUNXLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTtnQ0FBbEMsV0FBTyxTQUEyQixFQUFDOzs7O1NBQ3RDO1FBRVkscUNBQWdCLEdBQTdCOzs7O2dDQUNXLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQTtnQ0FBakMsV0FBTyxTQUEwQixFQUFDOzs7O1NBQ3JDO1FBQ0wsaUJBQUM7SUFBRCxDQS9CQSxBQStCQyxJQUFBO0lBL0JZLFVBQVU7UUFEdEIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLFVBQVUsQ0ErQnRCO0lBL0JZLGdDQUFVO0lBaUN2QjtRQUFBO1FBU0EsQ0FBQztRQUFELGtCQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUEiLCJmaWxlIjoiYXBwL2FwaS93ZWJzaXRlcy9iaXRydXNoL2JpdHJ1c2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJhdXJlbGlhLWZldGNoLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBXZWJzaXRlQ29pblZhbHVlIH0gZnJvbSBcImFwcC9hcGkvd2Vic2l0ZXMvd2Vic2l0ZUNvaW5WYWx1ZVwiO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgQml0UnVzaEFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvb3QgPSBcImh0dHBzOi8vYXBpLmJpdHJ1c2gubmwvdjEvcHJvZHVjdHNcIjtcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0UHJpY2UoY29pbkNvZGU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZmV0Y2godGhpcy5yb290ICsgXCIvRVVSLVwiICsgY29pbkNvZGUgKTtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQml0UnVzaENvaW47ICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2Vic2l0ZUNvaW5WYWx1ZShcIkJpdHJ1c2hcIiwganNvbi5jb2luX2N1cnJlbmN5LCBqc29uLmFzayk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhc3luYyBnZXRCaXRjb2luUHJpY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBhd2FpdCB0aGlzLmdldFByaWNlKFwiWEJUXCIpO1xyXG4gICAgICAgIGNvaW4uY29pbk5hbWUgPSBcIkJUQ1wiO1xyXG4gICAgICAgIHJldHVybiBjb2luO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRMaXRlQ29pblByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFByaWNlKFwiTFRDXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXREaWdpdGFsQ2FzaFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFByaWNlKFwiREFTSFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0RXRoZXJldW1QcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRQcmljZShcIkVUSFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQml0UnVzaENvaW4gXHJcbntcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpYXRfY3VycmVuY3k6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2luX2N1cnJlbmN5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmlhdF9xdWFudGl0eTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvaW5fcXVhbnRpdHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhc2s6IG51bWJlcjtcclxuICAgIHB1YmxpYyBiaWQ6IG51bWJlcjtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL2xpdGViaXQvbGl0ZWJpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("app/api/websites/litebit/litebit", [],function(){});

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
define('app/api/websites/coinbase/coinbase',["require", "exports", "aurelia-framework", "aurelia-fetch-client", "app/api/websites/websiteCoinValue"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, websiteCoinValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinBaseApi = (function () {
        function CoinBaseApi(http) {
            this.http = http;
            this.root = "https://api.coinbase.com/v2/exchange-rates?currency=";
        }
        CoinBaseApi.prototype.getPrice = function (coin) {
            return __awaiter(this, void 0, void 0, function () {
                var response, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.root + coin)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            json = _a.sent();
                            debugger;
                            return [2, new websiteCoinValue_1.WebsiteCoinValue("Coinbase", coin, json.data.rates["EUR"])];
                    }
                });
            });
        };
        CoinBaseApi.prototype.getBitcoinPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("BTC")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CoinBaseApi.prototype.getEthereumPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("ETH")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        CoinBaseApi.prototype.getLiteCoinPrice = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getPrice("LTC")];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        return CoinBaseApi;
    }());
    CoinBaseApi = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], CoinBaseApi);
    exports.CoinBaseApi = CoinBaseApi;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd2Vic2l0ZXMvY29pbmJhc2UvY29pbmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFdBQVc7UUFDcEIscUJBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFJN0IsU0FBSSxHQUFHLHNEQUFzRCxDQUFDO1FBRnJFLENBQUM7UUFJYSw4QkFBUSxHQUF0QixVQUF1QixJQUFZOzs7OztnQ0FFaEIsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFBOzt1Q0FBdkMsU0FBdUM7NEJBQzNDLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBcUI7NEJBQ2hDLFFBQVEsQ0FBQzs0QkFDVCxXQUFPLElBQUksbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBRSxFQUFBOzs7O1NBQzFFO1FBRVkscUNBQWUsR0FBNUI7Ozs7Z0NBQ1csV0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBO2dDQUFqQyxXQUFPLFNBQTBCLEVBQUE7Ozs7U0FDcEM7UUFFWSxzQ0FBZ0IsR0FBN0I7Ozs7Z0NBQ1csV0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBO2dDQUFqQyxXQUFPLFNBQTBCLEVBQUE7Ozs7U0FDcEM7UUFFWSxzQ0FBZ0IsR0FBN0I7Ozs7Z0NBQ1csV0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBO2dDQUFqQyxXQUFPLFNBQTBCLEVBQUE7Ozs7U0FDcEM7UUFJTCxrQkFBQztJQUFELENBN0JBLEFBNkJDLElBQUE7SUE3QlksV0FBVztRQUR2QiwwQkFBTSxDQUFDLGlDQUFVLENBQUM7eUNBRVcsaUNBQVU7T0FEM0IsV0FBVyxDQTZCdkI7SUE3Qlksa0NBQVciLCJmaWxlIjoiYXBwL2FwaS93ZWJzaXRlcy9jb2luYmFzZS9jb2luYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcbmltcG9ydCB7IFdlYnNpdGVDb2luVmFsdWUgfSBmcm9tIFwiYXBwL2FwaS93ZWJzaXRlcy93ZWJzaXRlQ29pblZhbHVlXCI7XHJcbmltcG9ydCAqIGFzIGZldGNoSnNvbnAgZnJvbSBcImZldGNoLWpzb25wXCI7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBDb2luQmFzZUFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgLy9UT0RPIHVzZSBucG0gcGFja2FnZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm9vdCA9IFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL2V4Y2hhbmdlLXJhdGVzP2N1cnJlbmN5PVwiO1xyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0UHJpY2UoY29pbjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLnJvb3QgKyBjb2luKTtcclxuICAgICAgICB2YXIganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gbmV3IFdlYnNpdGVDb2luVmFsdWUoXCJDb2luYmFzZVwiLCBjb2luICwganNvbi5kYXRhLnJhdGVzW1wiRVVSXCJdIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFzeW5jIGdldEJpdGNvaW5QcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRQcmljZShcIkJUQ1wiKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEV0aGVyZXVtUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0UHJpY2UoXCJFVEhcIilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TGl0ZUNvaW5QcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRQcmljZShcIkxUQ1wiKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('app/views/coinoverview/coinoverview',["require", "exports", "aurelia-framework", "app/api/coin-information", "app/api/coin"], function (require, exports, aurelia_framework_1, coin_information_1, coin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinOverview = (function () {
        function CoinOverview(currencyApi) {
            this.currencyApi = currencyApi;
        }
        CoinOverview.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.currencyApi.getCoins("EUR", this.coinIdentifiers)];
                        case 1:
                            _a.coinTableRows = _b.sent();
                            return [2];
                    }
                });
            });
        };
        CoinOverview.prototype.changeActiveCoin = function (identifier) {
            this.activeCoinIdentifier = identifier;
        };
        CoinOverview.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            this.coinTableRows.forEach(function (coinTableRow) {
                if (coinTableRow.code === newValue.code) {
                    coinTableRow.active = true;
                }
                else {
                    coinTableRow.active = false;
                }
            });
        };
        return CoinOverview;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", coin_information_1.CoinIdentifier)
    ], CoinOverview.prototype, "activeCoinIdentifier", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], CoinOverview.prototype, "coinIdentifiers", void 0);
    CoinOverview = __decorate([
        aurelia_framework_1.inject(coin_1.CoinApi),
        __metadata("design:paramtypes", [coin_1.CoinApi])
    ], CoinOverview);
    exports.CoinOverview = CoinOverview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9jb2lub3ZlcnZpZXcvY29pbm92ZXJ2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxZQUFZO1FBSXJCLHNCQUFvQixXQUFvQjtZQUFwQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUFJLENBQUM7UUFFaEMsK0JBQVEsR0FBckI7Ozs7Ozs0QkFDSSxLQUFBLElBQUksQ0FBQTs0QkFBaUIsV0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFBOzs0QkFBakYsR0FBSyxhQUFhLEdBQUcsU0FBNEQsQ0FBQzs7Ozs7U0FDckY7UUFFTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsVUFBMEI7WUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztRQUMzQyxDQUFDO1FBRU0sa0RBQTJCLEdBQWxDLFVBQW1DLFFBQVEsRUFBRSxRQUFRO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsWUFBWTtnQkFDcEMsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSyxDQUFDLENBQUEsQ0FBQztvQkFDckMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDTCxtQkFBQztJQUFELENBeEJBLEFBd0JDLElBQUE7SUF2QmE7UUFBVCw0QkFBUTtrQ0FBdUIsaUNBQWM7OERBQUE7SUFDcEM7UUFBVCw0QkFBUTtrQ0FBa0IsS0FBSzt5REFBaUI7SUFGeEMsWUFBWTtRQUR4QiwwQkFBTSxDQUFDLGNBQU8sQ0FBQzt5Q0FLcUIsY0FBTztPQUovQixZQUFZLENBd0J4QjtJQXhCWSxvQ0FBWSIsImZpbGUiOiJhcHAvdmlld3MvY29pbm92ZXJ2aWV3L2NvaW5vdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXJ9IGZyb20gXCJhcHAvYXBpL2NvaW4taW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHsgQ29pbkFwaSwgQ29pblRhYmxlUm93IH0gZnJvbSBcImFwcC9hcGkvY29pblwiO1xyXG5cclxuQGluamVjdChDb2luQXBpKVxyXG5leHBvcnQgY2xhc3MgQ29pbk92ZXJ2aWV3IHtcclxuICAgIEBiaW5kYWJsZSBhY3RpdmVDb2luSWRlbnRpZmllcjogQ29pbklkZW50aWZpZXJcclxuICAgIEBiaW5kYWJsZSBjb2luSWRlbnRpZmllcnM6IEFycmF5PENvaW5JZGVudGlmaWVyPjtcclxuICAgIHB1YmxpYyBjb2luVGFibGVSb3dzOiBBcnJheTxDb2luVGFibGVSb3c+O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW5jeUFwaTogQ29pbkFwaSkgeyB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuY29pblRhYmxlUm93cyA9IGF3YWl0IHRoaXMuY3VycmVuY3lBcGkuZ2V0Q29pbnMoXCJFVVJcIiwgdGhpcy5jb2luSWRlbnRpZmllcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VBY3RpdmVDb2luKGlkZW50aWZpZXI6IENvaW5JZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb2luSWRlbnRpZmllciA9IGlkZW50aWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2ZUNvaW5JZGVudGlmaWVyQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgdGhpcy5jb2luVGFibGVSb3dzLmZvckVhY2goY29pblRhYmxlUm93ID0+IHtcclxuICAgICAgICAgICAgaWYoY29pblRhYmxlUm93LmNvZGUgPT09IG5ld1ZhbHVlLmNvZGUgKXtcclxuICAgICAgICAgICAgICAgIGNvaW5UYWJsZVJvdy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29pblRhYmxlUm93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=bootstrap/css/bootstrap.css></require><require from=./styles.css></require><router-view></router-view></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = ".nav li:hover{\r\n    cursor: pointer;\r\n}\r\n.tr-clickable:hover\r\n{\r\n    background: #eee;\r\n    cursor: pointer;\r\n}\r\n\r\n.selected {\r\n    background: #eee;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n"; });
define('text!app/views/buyandcompare.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"coin of coins\">Website: ${coin.websiteName} Munt: ${coin.coinName} Prijs: ${coin.coinPrice}</div></template>"; });
define('text!app/views/overview.html', ['module'], function(module) { module.exports = "<template><require from=./news/news></require><require from=./coinoverview/coinoverview></require><nav class=\"navbar navbar-inverse\" style=border-radius:0><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=# click.delegate=resetActiveCoin()>Kripto</a></div><ul class=\"nav navbar-nav\"><li repeat.for=\"identifier of coinIdentifiers\" class=\"${identifier.active ? 'active' : ''}\" click.delegate=changeActiveCoin(identifier)><a>${identifier.name}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=#><span style=margin-right:10px class=\"glyphicon glyphicon-earphone\"></span>Contact</a></li></ul></div></nav><div class=container-fluid><div class=row><div class=col-md-6><news active-coin-identifier.two-way=activeCoinIdentifier></news></div><div class=\"col-md-6 list-group\"><coin-overview active-coin-identifier.two-way=activeCoinIdentifier coin-identifiers.bind=coinIdentifiers></coin-overview></div></div></div></template>"; });
define('text!app/views/news/article.html', ['module'], function(module) { module.exports = ""; });
define('text!app/views/news/news.html', ['module'], function(module) { module.exports = "<template><div class=list-group><div repeat.for=\"post of posts\" class=list-group-item><div if.bind=$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h1>${post.title}</h1></div><div class=col-md-12 innerhtml=${post.content} style=padding-top:10px></div></div><div if.bind=!$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4 d-flex align-items-center\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h3>${post.title}</h3></div></div></div></div></template>"; });
define('text!app/views/coinoverview/coinoverview.html', ['module'], function(module) { module.exports = "<template><table class=\"table table-bordered\"><thead><tr><th>Naam</th><th>Prijs</th><th>Verschil 24H</th></tr></thead><tbody><tr repeat.for=\"coinTableRow of coinTableRows\" click.delegate=\"changeActiveCoin(coinTableRow.code, coinTableRow.name)\" class=\"tr-clickable ${coinTableRow.active ? 'selected' : ''}\"><td><img src=\"${coinTableRow.imageUrl}?width=32&height=32\"> ${coinTableRow.name}</td><td>${coinTableRow.price}</td><td class=\"${coinTableRow.percentChange > 0 ? 'green' : 'red'}\">${coinTableRow.percentChange}%</td></tr></tbody></table></template>"; });
//# sourceMappingURL=app-bundle.js.map