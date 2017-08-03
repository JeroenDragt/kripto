var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-router", "app/api/coinIdentifierList"], function (require, exports, aurelia_framework_1, aurelia_router_1, coinIdentifierList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(router, coinIdentifierList) {
            this.router = router;
            this.coinIdentifierList = coinIdentifierList;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.options.root = "/";
            config.map([
                { route: '', name: 'overview', moduleId: 'app/views/overview' },
                { route: '/:id', name: 'article', moduleId: 'app/views/overview' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.Router, coinIdentifierList_1.CoinIdentifierList),
        __metadata("design:paramtypes", [aurelia_router_1.Router,
            coinIdentifierList_1.CoinIdentifierList])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFDZCxhQUFvQixNQUFjLEVBQ3pCLGtCQUFzQztZQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0MsQ0FBQztRQUNELDZCQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFFNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztnQkFDL0QsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2FBQ25FLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FmQSxBQWVDLElBQUE7SUFmWSxHQUFHO1FBRGYsMEJBQU0sQ0FBQyx1QkFBTSxFQUFFLHVDQUFrQixDQUFDO3lDQUVMLHVCQUFNO1lBQ0wsdUNBQWtCO09BRnBDLEdBQUcsQ0FlZjtJQWZZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXJMaXN0IH0gZnJvbSBcImFwcC9hcGkvY29pbklkZW50aWZpZXJMaXN0XCI7XHJcblxyXG5AaW5qZWN0KFJvdXRlciwgQ29pbklkZW50aWZpZXJMaXN0KVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHVibGljIGNvaW5JZGVudGlmaWVyTGlzdDogQ29pbklkZW50aWZpZXJMaXN0KSB7XHJcbiAgfVxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xyXG5cclxuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7XHJcbiAgICBjb25maWcub3B0aW9ucy5yb290ID0gXCIvXCI7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAgeyByb3V0ZTogJycsICBuYW1lOiAnb3ZlcnZpZXcnLCBtb2R1bGVJZDogJ2FwcC92aWV3cy9vdmVydmlldyd9LFxyXG4gICAgICB7IHJvdXRlOiAnLzppZCcsIG5hbWU6ICdhcnRpY2xlJywgbW9kdWxlSWQ6ICdhcHAvdmlld3Mvb3ZlcnZpZXcnIH1cclxuICAgIF0pO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfSAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-chart');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFkRCw4QkFjQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgYXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpXHJcbiAgICAucGx1Z2luKCdhdXJlbGlhLWNoYXJ0Jyk7XHJcblxyXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xyXG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcclxuICB9XHJcbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('app/api/chart',["require", "exports", "aurelia-framework", "aurelia-fetch-client", "app/api/coinIdentifierList"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, coinIdentifierList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartApi = (function () {
        function ChartApi(http, coinIdentifierList) {
            this.http = http;
            this.coinIdentifierList = coinIdentifierList;
            this.coinIdentifierList = coinIdentifierList;
        }
        ChartApi.prototype.getAllChartData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var chartData, responses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            chartData = new ChartData();
                            return [4, this.getAllRepsonses()];
                        case 1:
                            responses = _a.sent();
                            this.getChartDataLabels(responses, chartData);
                            this.getDataSets(responses, chartData);
                            debugger;
                            return [2, chartData];
                    }
                });
            });
        };
        ChartApi.prototype.getAllRepsonses = function () {
            return __awaiter(this, void 0, void 0, function () {
                var responses, _i, _a, identifier, response, json;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            responses = new Array();
                            _i = 0, _a = this.coinIdentifierList.coinIdentifiers;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 5];
                            identifier = _a[_i];
                            if (!(identifier.code != "BTC")) return [3, 4];
                            return [4, this.http.fetch("https://min-api.cryptocompare.com/data/histohour?fsym=" + identifier.code + "&tsym=EUR&limit=24&e=CCCAGG")];
                        case 2:
                            response = _b.sent();
                            return [4, response.json()];
                        case 3:
                            json = _b.sent();
                            responses.push([identifier.name, json]);
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3, 1];
                        case 5:
                            ;
                            return [2, responses];
                    }
                });
            });
        };
        ChartApi.prototype.getChartDataLabels = function (responses, chartData) {
            var _this = this;
            if (responses.length > 0) {
                responses[0][1].Data.forEach(function (item) {
                    chartData.labels.push(_this.getTimeFromUnixTime(item.time));
                });
            }
        };
        ChartApi.prototype.getDataSets = function (responses, chartData) {
            var _this = this;
            responses.forEach(function (response) {
                var dataset = _this.getDataSet(response[0], response[1]);
                chartData.datasets.push(dataset);
            });
        };
        ChartApi.prototype.getDataSet = function (label, response) {
            var dataset = new DataSet;
            dataset.label = label;
            response.Data.forEach(function (item) {
                dataset.data.push(item.high);
            });
            return dataset;
        };
        ChartApi.prototype.getTimeFromUnixTime = function (unixTime) {
            var date = new Date(unixTime * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            return hours + ':' + minutes.substr(-2);
        };
        return ChartApi;
    }());
    ChartApi = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, coinIdentifierList_1.CoinIdentifierList),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, coinIdentifierList_1.CoinIdentifierList])
    ], ChartApi);
    exports.ChartApi = ChartApi;
    var ChartData = (function () {
        function ChartData() {
            this.labels = new Array();
            this.datasets = new Array();
        }
        return ChartData;
    }());
    exports.ChartData = ChartData;
    var DataSet = (function () {
        function DataSet() {
            this.fillColor = "rgba(151,187,205,0.2)";
            this.strokeColor = "rgba(151,187,205,1)";
            this.pointColor = "rgba(151,187,205,1)";
            this.pointStrokeColor = "#fff";
            this.pointHighlightFill = "#fff";
            this.pointHighlightStroke = "rgba(151,187,205,1)";
            this.data = new Array();
        }
        return DataSet;
    }());
    exports.DataSet = DataSet;
    var Response = (function () {
        function Response() {
        }
        return Response;
    }());
    exports.Response = Response;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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YlksMEJBQU87SUFlcEI7UUFBQTtRQVFBLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw0QkFBUSIsImZpbGUiOiJhcHAvYXBpL2NoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXJMaXN0IH0gZnJvbSBcImFwcC9hcGkvY29pbklkZW50aWZpZXJMaXN0XCIgXHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQsIENvaW5JZGVudGlmaWVyTGlzdClcclxuZXhwb3J0IGNsYXNzIENoYXJ0QXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGNvaW5JZGVudGlmaWVyTGlzdDogQ29pbklkZW50aWZpZXJMaXN0ICkge1xyXG4gICAgICAgIHRoaXMuY29pbklkZW50aWZpZXJMaXN0ID0gY29pbklkZW50aWZpZXJMaXN0O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBbGxDaGFydERhdGEoKSB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgY2hhcnREYXRhID0gbmV3IENoYXJ0RGF0YSgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZXMgPSBhd2FpdCB0aGlzLmdldEFsbFJlcHNvbnNlcygpOyAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDaGFydERhdGFMYWJlbHMocmVzcG9uc2VzLCBjaGFydERhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YVNldHMocmVzcG9uc2VzLCBjaGFydERhdGEpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiBjaGFydERhdGE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRBbGxSZXBzb25zZXMoKSB7XHJcbiAgICAgICAgIGxldCByZXNwb25zZXMgPSBuZXcgQXJyYXk8W3N0cmluZywgUmVzcG9uc2VdPigpO1xyXG4gICAgICAgICBmb3IgKGxldCBpZGVudGlmaWVyIG9mIHRoaXMuY29pbklkZW50aWZpZXJMaXN0LmNvaW5JZGVudGlmaWVycyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGlkZW50aWZpZXIuY29kZSAhPSBcIkJUQ1wiKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaChcImh0dHBzOi8vbWluLWFwaS5jcnlwdG9jb21wYXJlLmNvbS9kYXRhL2hpc3RvaG91cj9mc3ltPVwiKyBpZGVudGlmaWVyLmNvZGUgK1wiJnRzeW09RVVSJmxpbWl0PTI0JmU9Q0NDQUdHXCIpOyAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBSZXNwb25zZTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5wdXNoKFtpZGVudGlmaWVyLm5hbWUsIGpzb25dKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJ0RGF0YUxhYmVscyhyZXNwb25zZXM6IEFycmF5PFtzdHJpbmcsIFJlc3BvbnNlXT4sIGNoYXJ0RGF0YTogQ2hhcnREYXRhKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlc1swXVsxXS5EYXRhLmZvckVhY2goaXRlbSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5sYWJlbHMucHVzaCh0aGlzLmdldFRpbWVGcm9tVW5peFRpbWUoaXRlbS50aW1lKSk7XHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERhdGFTZXRzKHJlc3BvbnNlczogQXJyYXk8W3N0cmluZywgUmVzcG9uc2VdPiwgY2hhcnREYXRhOiBDaGFydERhdGEpIHtcclxuICAgICAgICByZXNwb25zZXMuZm9yRWFjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhc2V0ID10aGlzLmdldERhdGFTZXQocmVzcG9uc2VbMF0sIHJlc3BvbnNlWzFdKVxyXG4gICAgICAgICAgICBjaGFydERhdGEuZGF0YXNldHMucHVzaChkYXRhc2V0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldERhdGFTZXQobGFiZWw6IHN0cmluZywgcmVzcG9uc2U6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGFzZXQgPSBuZXcgRGF0YVNldDtcclxuICAgICAgICBkYXRhc2V0LmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9uc2UuRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBkYXRhc2V0LmRhdGEucHVzaChpdGVtLmhpZ2gpOyAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGltZUZyb21Vbml4VGltZSh1bml4VGltZSkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodW5peFRpbWUqMTAwMCk7XHJcbiAgICAgICAgLy8gSG91cnMgcGFydCBmcm9tIHRoZSB0aW1lc3RhbXBcclxuICAgICAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgLy8gTWludXRlcyBwYXJ0IGZyb20gdGhlIHRpbWVzdGFtcFxyXG4gICAgICAgIHZhciBtaW51dGVzID0gXCIwXCIgKyBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAvLyBTZWNvbmRzIHBhcnQgZnJvbSB0aGUgdGltZXN0YW1wXHJcbiAgICAgICAgLy92YXIgc2Vjb25kcyA9IFwiMFwiICsgZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcy5zdWJzdHIoLTIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJ0RGF0YSB7ICAgIFxyXG4gICAgcHVibGljIGxhYmVscyA6IEFycmF5PHN0cmluZz5cclxuICAgIHB1YmxpYyBkYXRhc2V0czogQXJyYXk8RGF0YVNldD4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxhYmVscyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0cyA9IG5ldyBBcnJheTxEYXRhU2V0PigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFTZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gICAgIHB1YmxpYyBmaWxsQ29sb3I6IHN0cmluZyA9IFwicmdiYSgxNTEsMTg3LDIwNSwwLjIpXCI7ICAgICAgICAgIFxyXG4gICAgIHB1YmxpYyBzdHJva2VDb2xvcjogc3RyaW5nID0gXCJyZ2JhKDE1MSwxODcsMjA1LDEpXCI7ICAgICAgICAgXHJcbiAgICAgcHVibGljIHBvaW50Q29sb3I6IHN0cmluZyA9IFwicmdiYSgxNTEsMTg3LDIwNSwxKVwiOyAgICAgICAgICBcclxuICAgICBwdWJsaWMgcG9pbnRTdHJva2VDb2xvcjogc3RyaW5nID0gXCIjZmZmXCI7ICAgIFxyXG4gICAgIHB1YmxpYyBwb2ludEhpZ2hsaWdodEZpbGw6IHN0cmluZyA9IFwiI2ZmZlwiOyAgXHJcbiAgICAgcHVibGljIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiBzdHJpbmcgPSBcInJnYmEoMTUxLDE4NywyMDUsMSlcIjtcclxuICAgIHB1YmxpYyBkYXRhOiBudW1iZXJbXTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcbiAgICBSZXNwb25zZTogc3RyaW5nO1xyXG4gICAgICAgIFR5cGU6IG51bWJlcjtcclxuICAgICAgICBBZ2dyZWdhdGVkOiBib29sZWFuO1xyXG4gICAgICAgIERhdGE6IERhdHVtW107XHJcbiAgICAgICAgVGltZVRvOiBudW1iZXI7XHJcbiAgICAgICAgVGltZUZyb206IG51bWJlcjtcclxuICAgICAgICBGaXJzdFZhbHVlSW5BcnJheTogYm9vbGVhbjsgICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdHVtIHtcclxuICAgICAgICB0aW1lOiBudW1iZXI7XHJcbiAgICAgICAgY2xvc2U6IG51bWJlcjtcclxuICAgICAgICBoaWdoOiBudW1iZXI7XHJcbiAgICAgICAgbG93OiBudW1iZXI7XHJcbiAgICAgICAgb3BlbjogbnVtYmVyO1xyXG4gICAgICAgIHZvbHVtZWZyb206IG51bWJlcjtcclxuICAgICAgICB2b2x1bWV0bzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
                                var parsedCoin = new CoinTableRow(c, result.PRICE, result.CHANGEPCT24HOUR, c.imageUrl);
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
        function CoinTableRow(identifier, price, percentChange, imageUrl) {
            this.identifier = identifier;
            this.price = price;
            this.percentChange = percentChange;
            this.imageUrl = imageUrl;
            this.active = false;
        }
        return CoinTableRow;
    }());
    exports.CoinTableRow = CoinTableRow;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsT0FBTztRQUNoQixpQkFBb0IsSUFBZ0I7WUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUk1QixZQUFPLEdBQVcsd0RBQXdELENBQUE7UUFGbEYsQ0FBQztRQUdZLDBCQUFRLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxLQUE0Qjs7Z0NBRTFELFdBQVcsa0JBSVgsV0FBVzs7O2dDQUxFLFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFBOzt5Q0FBckMsU0FBcUM7MENBQ3BDLFNBQVMsR0FBRyxNQUFNOzRCQUNyQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxFQUFBOzt1Q0FBOUQsU0FBOEQ7NEJBQ2xFLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBcUI7MENBRWQsSUFBSSxLQUFLLEVBQWdCOzRCQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQ0FDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQ0FDekMsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3ZGLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ2pDLENBQUMsQ0FBQyxDQUFBOzRCQUNGLFdBQU8sV0FBVyxFQUFDOzs7O1NBQ3RCO1FBRU8scUNBQW1CLEdBQTNCLFVBQTRCLEtBQTRCO1lBQ3BELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQ1QsQ0FBQztvQkFDRyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUEsQ0FBQztvQkFDRCxXQUFXLElBQUksR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQXJDQSxBQXFDQyxJQUFBO0lBckNZLE9BQU87UUFEbkIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLE9BQU8sQ0FxQ25CO0lBckNZLDBCQUFPO0lBdUNwQjtRQUVJLHNCQUNPLFVBQTBCLEVBQzFCLEtBQWEsRUFDYixhQUFxQixFQUNyQixRQUFnQjtZQUhoQixlQUFVLEdBQVYsVUFBVSxDQUFnQjtZQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2Isa0JBQWEsR0FBYixhQUFhLENBQVE7WUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtZQUxoQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBTTdCLENBQUM7UUFDUCxtQkFBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksb0NBQVkiLCJmaWxlIjoiYXBwL2FwaS9jb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXIgfSBmcm9tIFwiYXBwL2FwaS9jb2luSWRlbnRpZmllckxpc3RcIiBcclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgQ29pbkFwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByb290VXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vbWluLWFwaS5jcnlwdG9jb21wYXJlLmNvbS9kYXRhL3ByaWNlbXVsdGlmdWxsP1wiXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29pbnModmFsdXRhOiBzdHJpbmcsIGNvaW5zOiBBcnJheTxDb2luSWRlbnRpZmllcj4pIHtcclxuICAgICAgICBsZXQgY29pbnNRdWVyeSA9IGF3YWl0IHRoaXMuZ2V0Q29pbnNRdWVyeVN0cmluZyhjb2lucyk7XHJcbiAgICAgICAgbGV0IHZhbHV0YVF1ZXJ5ID0gXCImdHN5bXM9XCIgKyB2YWx1dGE7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMucm9vdFVybCArIGNvaW5zUXVlcnkgKyB2YWx1dGFRdWVyeSk7XHJcbiAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZENvaW5zID0gbmV3IEFycmF5PENvaW5UYWJsZVJvdz4oKTtcclxuICAgICAgICBjb2lucy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ganNvbi5ESVNQTEFZW2MuY29kZV1bdmFsdXRhXSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcGFyc2VkQ29pbiA9IG5ldyBDb2luVGFibGVSb3coYywgcmVzdWx0LlBSSUNFLCByZXN1bHQuQ0hBTkdFUENUMjRIT1VSLCBjLmltYWdlVXJsKTtcclxuICAgICAgICAgICAgcGFyc2VkQ29pbnMucHVzaChwYXJzZWRDb2luKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJzZWRDb2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvaW5zUXVlcnlTdHJpbmcoY29pbnM6IEFycmF5PENvaW5JZGVudGlmaWVyPikge1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiZnN5bXM9XCI7XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICBpZihmaXJzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gY29pbi5jb2RlO1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCIsXCIgK2NvaW4uY29kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2luVGFibGVSb3cge1xyXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWRlbnRpZmllcjogQ29pbklkZW50aWZpZXIsICAgIFxyXG4gICAgcHVibGljIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcGVyY2VudENoYW5nZTogbnVtYmVyLFxyXG4gICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmdcclxuICAgICl7fVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('app/api/coinIdentifierList',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinIdentifierList = (function () {
        function CoinIdentifierList() {
            this.coinIdentifiers = new Array();
            this.bitcoin = new CoinIdentifier("Bitcoin", "BTC", "http://www.cryptocompare.com/media/19633/btc.png");
            this.ethereum = new CoinIdentifier("Ethereum", "ETH", "https://www.cryptocompare.com/media/20646/eth.png");
            this.litecoin = new CoinIdentifier("Litecoin", "LTC", "https://www.cryptocompare.com/media/19782/litecoin-logo.png");
            this.digitalCash = new CoinIdentifier("DigitalCash", "DASH", "https://www.cryptocompare.com/media/20626/dash.png");
            this.monero = new CoinIdentifier("Monero", "XMR", "https://www.cryptocompare.com/media/19969/xmr.png");
            this.coinIdentifiers = [this.bitcoin, this.ethereum, this.litecoin, this.digitalCash, this.monero];
        }
        CoinIdentifierList.prototype.selectByCoinCode = function (coinCode) {
            this.coinIdentifiers.forEach(function (identifier) {
                if (identifier.code === coinCode) {
                    identifier.active = true;
                }
                else {
                    identifier.active = false;
                }
            });
        };
        CoinIdentifierList.prototype.selectByCoinName = function (coinName) {
            this.coinIdentifiers.forEach(function (identifier) {
                if (identifier.name === coinName) {
                    identifier.active = true;
                }
                else {
                    identifier.active = false;
                }
            });
        };
        CoinIdentifierList.prototype.resetActiveCoin = function () {
            this.coinIdentifiers.forEach(function (identifier) {
                identifier.active = false;
            });
        };
        return CoinIdentifierList;
    }());
    exports.CoinIdentifierList = CoinIdentifierList;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvY29pbklkZW50aWZpZXJMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7O0lBRWI7UUFPSTtZQU5PLG9CQUFlLEdBQTBCLElBQUksS0FBSyxFQUFrQixDQUFDO1lBQ3BFLFlBQU8sR0FBRyxJQUFJLGNBQWMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGtEQUFrRCxDQUFDLENBQUM7WUFDbkcsYUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsbURBQW1ELENBQUMsQ0FBQztZQUN0RyxhQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSw2REFBNkQsQ0FBQyxDQUFDO1lBQ2hILGdCQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxvREFBb0QsQ0FBQyxDQUFDO1lBQzlHLFdBQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7WUFFdEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7UUFFTSw2Q0FBZ0IsR0FBdkIsVUFBd0IsUUFBZ0I7WUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU0sNkNBQWdCLEdBQXZCLFVBQXdCLFFBQWdCO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtnQkFDbkMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMvQixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVNLDRDQUFlLEdBQXRCO1lBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUNuQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCx5QkFBQztJQUFELENBdENBLEFBc0NDLElBQUE7SUF0Q1ksZ0RBQWtCO0lBd0MvQjtRQUVJLHdCQUFtQixJQUFZLEVBQ3BCLElBQVksRUFDWixRQUFnQjtZQUZSLFNBQUksR0FBSixJQUFJLENBQVE7WUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDdkIsQ0FBQztRQUNULHFCQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSx3Q0FBYyIsImZpbGUiOiJhcHAvYXBpL2NvaW5JZGVudGlmaWVyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW5JZGVudGlmaWVyTGlzdCB7XHJcbiAgICBwdWJsaWMgY29pbklkZW50aWZpZXJzOiBBcnJheTxDb2luSWRlbnRpZmllcj4gPSBuZXcgQXJyYXk8Q29pbklkZW50aWZpZXI+KCk7XHJcbiAgICBwcml2YXRlIGJpdGNvaW4gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJCaXRjb2luXCIsIFwiQlRDXCIsIFwiaHR0cDovL3d3dy5jcnlwdG9jb21wYXJlLmNvbS9tZWRpYS8xOTYzMy9idGMucG5nXCIpO1xyXG4gICAgcHJpdmF0ZSBldGhlcmV1bSA9IG5ldyBDb2luSWRlbnRpZmllcihcIkV0aGVyZXVtXCIsIFwiRVRIXCIsIFwiaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20vbWVkaWEvMjA2NDYvZXRoLnBuZ1wiKTtcclxuICAgIHByaXZhdGUgbGl0ZWNvaW4gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJMaXRlY29pblwiLCBcIkxUQ1wiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzE5NzgyL2xpdGVjb2luLWxvZ28ucG5nXCIpO1xyXG4gICAgcHJpdmF0ZSBkaWdpdGFsQ2FzaCA9IG5ldyBDb2luSWRlbnRpZmllcihcIkRpZ2l0YWxDYXNoXCIsIFwiREFTSFwiLCBcImh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tL21lZGlhLzIwNjI2L2Rhc2gucG5nXCIpO1xyXG4gICAgcHJpdmF0ZSBtb25lcm8gPSBuZXcgQ29pbklkZW50aWZpZXIoXCJNb25lcm9cIiwgXCJYTVJcIiwgXCJodHRwczovL3d3dy5jcnlwdG9jb21wYXJlLmNvbS9tZWRpYS8xOTk2OS94bXIucG5nXCIpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2luSWRlbnRpZmllcnMgPSBbdGhpcy5iaXRjb2luLCB0aGlzLmV0aGVyZXVtLCB0aGlzLmxpdGVjb2luLCB0aGlzLmRpZ2l0YWxDYXNoLCB0aGlzLm1vbmVyb107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEJ5Q29pbkNvZGUoY29pbkNvZGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29pbklkZW50aWZpZXJzLmZvckVhY2goaWRlbnRpZmllciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyLmNvZGUgPT09IGNvaW5Db2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdEJ5Q29pbk5hbWUoY29pbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29pbklkZW50aWZpZXJzLmZvckVhY2goaWRlbnRpZmllciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyLm5hbWUgPT09IGNvaW5OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0QWN0aXZlQ29pbigpIHtcclxuICAgICAgICB0aGlzLmNvaW5JZGVudGlmaWVycy5mb3JFYWNoKGlkZW50aWZpZXIgPT4ge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29pbklkZW50aWZpZXIge1xyXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgY29kZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nLFxyXG4gICAgKSB7IH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
                var response, post, categoryName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "posts/" + id + "?_embed")];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            post = _a.sent();
                            categoryName = post._embedded["wp:term"][0][0].name;
                            return [2, new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url, categoryName)];
                    }
                });
            });
        };
        WordPressApi.prototype.parseResponseToWordpressPost = function (posts) {
            var parsedPosts = new Array();
            posts.forEach(function (post) {
                var categoryName = post._embedded["wp:term"][0][0].name;
                parsedPosts.push(new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url, name));
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
        function WordPressPost(id, title, content, featuredImageSrc, categoryName) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.featuredImageSrc = featuredImageSrc;
            this.categoryName = categoryName;
        }
        return WordPressPost;
    }());
    exports.WordPressPost = WordPressPost;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd29yZHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxZQUFZO1FBQ3JCLHNCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTVCLGtCQUFhLEdBQVcsNkNBQTZDLENBQUE7UUFGN0UsQ0FBQztRQUlZLCtCQUFRLEdBQXJCOzs7OztnQ0FDbUIsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxFQUFBOzt1Q0FBMUQsU0FBMEQ7NEJBQzdELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRVkscUNBQWMsR0FBM0IsVUFBNEIsWUFBb0I7Ozs7O2dDQUUzQixXQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUE7O3lDQUF4QyxTQUF3Qzs0QkFDMUMsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFFLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxFQUFBOzt1Q0FBbEYsU0FBa0Y7NEJBQ3JGLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7NEJBQ2pDLFdBQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFBOzs7O1NBQ2xEO1FBRVksa0NBQVcsR0FBeEIsVUFBeUIsRUFBVTs7b0NBRzNCLFlBQVk7OztnQ0FGRCxXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUUsUUFBUSxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBQTs7dUNBQXBFLFNBQW9FOzRCQUN4RSxXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7bUNBQXJCLFNBQXFCOzJDQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs0QkFDdkQsV0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLEVBQUM7Ozs7U0FDako7UUFFTyxtREFBNEIsR0FBcEMsVUFBcUMsS0FBSztZQUN0QyxJQUFJLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBaUIsQ0FBQztZQUM3QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEQsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUNuSixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVhLHNDQUFlLEdBQTdCLFVBQThCLFFBQWU7Ozs7O2dDQUUxQixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUE7O3VDQUF2RixTQUF1Rjs0QkFDdkYsV0FBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3VDQUFyQixTQUFxQjs0QkFDcEMsV0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDOzs7O1NBQ3pCO1FBQ0wsbUJBQUM7SUFBRCxDQTNDQSxBQTJDQyxJQUFBO0lBM0NZLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLFlBQVksQ0EyQ3hCO0lBM0NZLG9DQUFZO0lBNkN6QjtRQUNBLHVCQUNXLEVBQVUsRUFDVixLQUFhLEVBQ2IsT0FBZSxFQUNmLGdCQUF3QixFQUN4QixZQUFvQjtZQUpwQixPQUFFLEdBQUYsRUFBRSxDQUFRO1lBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNiLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7WUFDeEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBSSxDQUFDO1FBRXBDLG9CQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSxzQ0FBYSIsImZpbGUiOiJhcHAvYXBpL3dvcmRwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NBcGkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd29yZHByZXNzUm9vdDogc3RyaW5nID0gXCJodHRwOi8vd3d3LmpkcmFndC5jb20vS3JpcHRvL3dwLWpzb24vd3AvdjIvXCIgXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFBvc3RzKCkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgKyBcInBvc3RzP19lbWJlZFwiKTtcclxuICAgICAgICBsZXQgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlVG9Xb3JkcHJlc3NQb3N0KHBvc3RzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRQb3N0c0J5Q29pbihjYXRlZ29yeU5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGF3YWl0IHRoaXMuZ2V0Q2F0ZWdvcnlDb2RlKGNhdGVnb3J5TmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMud29yZHByZXNzUm9vdCArXCJwb3N0cz9fZW1iZWQmY2F0ZWdvcmllcz1cIiArIGNhdGVnb3J5SWQpIDtcclxuICAgICAgICBsZXQgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSZXNwb25zZVRvV29yZHByZXNzUG9zdChwb3N0cylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0UG9zdEJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgK1wicG9zdHMvXCIgKyBpZCArIFwiP19lbWJlZFwiKTtcclxuICAgICAgICBsZXQgcG9zdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gcG9zdC5fZW1iZWRkZWRbXCJ3cDp0ZXJtXCJdWzBdWzBdLm5hbWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXb3JkUHJlc3NQb3N0KHBvc3QuaWQsIHBvc3QudGl0bGUucmVuZGVyZWQsIHBvc3QuY29udGVudC5yZW5kZXJlZCwgcG9zdC5fZW1iZWRkZWRbXCJ3cDpmZWF0dXJlZG1lZGlhXCJdWzBdLnNvdXJjZV91cmwsIGNhdGVnb3J5TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVJlc3BvbnNlVG9Xb3JkcHJlc3NQb3N0KHBvc3RzKXtcclxuICAgICAgICBsZXQgcGFyc2VkUG9zdHMgPSBuZXcgQXJyYXk8V29yZFByZXNzUG9zdD4oKTtcclxuICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gcG9zdC5fZW1iZWRkZWRbXCJ3cDp0ZXJtXCJdWzBdWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIHBhcnNlZFBvc3RzLnB1c2gobmV3IFdvcmRQcmVzc1Bvc3QocG9zdC5pZCwgcG9zdC50aXRsZS5yZW5kZXJlZCwgcG9zdC5jb250ZW50LnJlbmRlcmVkLCBwb3N0Ll9lbWJlZGRlZFtcIndwOmZlYXR1cmVkbWVkaWFcIl1bMF0uc291cmNlX3VybCxuYW1lKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkUG9zdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYXRlZ29yeUNvZGUoY29pbk5hbWU6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCh0aGlzLndvcmRwcmVzc1Jvb3QgKyBcImNhdGVnb3JpZXM/c2x1Zz1cIiArIGNvaW5OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlbMF0uaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NQb3N0IHtcclxuY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZSA6c3RyaW5nLFxyXG4gICAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyBmZWF0dXJlZEltYWdlU3JjOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlOYW1lOiBzdHJpbmcgKSB7fVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('app/views/overview',["require", "exports", "aurelia-framework", "aurelia-router", "app/api/coinIdentifierList"], function (require, exports, aurelia_framework_1, aurelia_router_1, coinIdentifierList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Overview = (function () {
        function Overview(coinIdentifierList, router) {
            this.coinIdentifierList = coinIdentifierList;
            this.router = router;
        }
        Overview.prototype.activate = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.articleId = params.id;
                    return [2];
                });
            });
        };
        Overview.prototype.changeActiveCoin = function (coinIdentifier) {
            this.activeCoinIdentifier = coinIdentifier;
        };
        Overview.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            if (newValue) {
                this.coinIdentifierList.coinIdentifiers.forEach(function (identifier) {
                    if (identifier.code === newValue.code) {
                        identifier.active = true;
                    }
                    else {
                        identifier.active = false;
                    }
                });
            }
        };
        Overview.prototype.resetActiveCoin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.coinIdentifierList.coinIdentifiers.forEach(function (identifier) {
                        identifier.active = false;
                    });
                    this.activeCoinIdentifier = undefined;
                    this.router.navigateToRoute("overview");
                    return [2];
                });
            });
        };
        return Overview;
    }());
    __decorate([
        aurelia_framework_1.observable,
        __metadata("design:type", coinIdentifierList_1.CoinIdentifier)
    ], Overview.prototype, "activeCoinIdentifier", void 0);
    Overview = __decorate([
        aurelia_framework_1.inject(coinIdentifierList_1.CoinIdentifierList, aurelia_router_1.Router),
        __metadata("design:paramtypes", [coinIdentifierList_1.CoinIdentifierList, aurelia_router_1.Router])
    ], Overview);
    exports.Overview = Overview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9vdmVydmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7O0lBTWIsSUFBYSxRQUFRO1FBQ2pCLGtCQUFtQixrQkFBc0MsRUFBUyxNQUFjO1lBQTdELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7WUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWhGLENBQUM7UUFLWSwyQkFBUSxHQUFyQixVQUFzQixNQUFNOzs7b0JBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7OztTQUU5QjtRQUVNLG1DQUFnQixHQUF2QixVQUF3QixjQUE4QjtZQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxDQUFDO1FBQy9DLENBQUM7UUFFTSw4Q0FBMkIsR0FBbEMsVUFBbUMsUUFBUSxFQUFFLFFBQVE7WUFDakQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFFWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7b0JBQ3RELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM3QixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM5QixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztRQUNMLENBQUM7UUFFWSxrQ0FBZSxHQUE1Qjs7O29CQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTt3QkFDdEQsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O1NBQzNDO1FBQ0wsZUFBQztJQUFELENBeENBLEFBd0NDLElBQUE7SUFuQ2U7UUFBWCw4QkFBVTtrQ0FBOEIsbUNBQWM7MERBQUM7SUFML0MsUUFBUTtRQURwQiwwQkFBTSxDQUFDLHVDQUFrQixFQUFDLHVCQUFNLENBQUM7eUNBRVMsdUNBQWtCLEVBQWlCLHVCQUFNO09BRHZFLFFBQVEsQ0F3Q3BCO0lBeENZLDRCQUFRIiwiZmlsZSI6ImFwcC92aWV3cy9vdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCJcclxuaW1wb3J0IHsgQ29pbklkZW50aWZpZXIsIENvaW5JZGVudGlmaWVyTGlzdCB9IGZyb20gXCJhcHAvYXBpL2NvaW5JZGVudGlmaWVyTGlzdFwiO1xyXG5cclxuQGluamVjdChDb2luSWRlbnRpZmllckxpc3QsUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvaW5JZGVudGlmaWVyTGlzdDogQ29pbklkZW50aWZpZXJMaXN0LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG9ic2VydmFibGUgcHVibGljIGFjdGl2ZUNvaW5JZGVudGlmaWVyOiBDb2luSWRlbnRpZmllcjtcclxuICAgIHB1YmxpYyBhcnRpY2xlSWQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYWN0aXZhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hcnRpY2xlSWQgPSBwYXJhbXMuaWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VBY3RpdmVDb2luKGNvaW5JZGVudGlmaWVyOiBDb2luSWRlbnRpZmllcikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29pbklkZW50aWZpZXIgPSBjb2luSWRlbnRpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlQ29pbklkZW50aWZpZXJDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2luSWRlbnRpZmllckxpc3QuY29pbklkZW50aWZpZXJzLmZvckVhY2goaWRlbnRpZmllciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllci5jb2RlID09PSBuZXdWYWx1ZS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlc2V0QWN0aXZlQ29pbigpIHtcclxuICAgICAgICB0aGlzLmNvaW5JZGVudGlmaWVyTGlzdC5jb2luSWRlbnRpZmllcnMuZm9yRWFjaChpZGVudGlmaWVyID0+IHtcclxuICAgICAgICAgICAgaWRlbnRpZmllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb2luSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoXCJvdmVydmlld1wiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('app/views/coinoverview/coinoverview',["require", "exports", "aurelia-framework", "aurelia-router", "app/api/coinIdentifierList", "app/api/coin", "app/api/chart"], function (require, exports, aurelia_framework_1, aurelia_router_1, coinIdentifierList_1, coin_1, chart_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoinOverview = (function () {
        function CoinOverview(currencyApi, coinIdentifierList, router, chartApi) {
            this.currencyApi = currencyApi;
            this.coinIdentifierList = coinIdentifierList;
            this.router = router;
            this.chartApi = chartApi;
        }
        CoinOverview.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4, this.currencyApi.getCoins("EUR", this.coinIdentifierList.coinIdentifiers)];
                        case 1:
                            _a.coinTableRows = _c.sent();
                            _b = this;
                            return [4, this.chartApi.getAllChartData()];
                        case 2:
                            _b.myData = _c.sent();
                            return [2];
                    }
                });
            });
        };
        CoinOverview.prototype.changeActiveCoinCategory = function (identifier) {
            this.activeCoinIdentifier = identifier;
            this.router.navigateToRoute("overview");
        };
        CoinOverview.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            if (newValue) {
                this.coinTableRows.forEach(function (coinTableRow) {
                    if (coinTableRow.identifier === newValue) {
                        coinTableRow.active = true;
                    }
                    else {
                        coinTableRow.active = false;
                    }
                });
            }
        };
        return CoinOverview;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", coinIdentifierList_1.CoinIdentifier)
    ], CoinOverview.prototype, "activeCoinIdentifier", void 0);
    CoinOverview = __decorate([
        aurelia_framework_1.inject(coin_1.CoinApi, coinIdentifierList_1.CoinIdentifierList, aurelia_router_1.Router, chart_1.ChartApi),
        __metadata("design:paramtypes", [coin_1.CoinApi,
            coinIdentifierList_1.CoinIdentifierList,
            aurelia_router_1.Router,
            chart_1.ChartApi])
    ], CoinOverview);
    exports.CoinOverview = CoinOverview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9jb2lub3ZlcnZpZXcvY29pbm92ZXJ2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT0EsSUFBYSxZQUFZO1FBS3JCLHNCQUFvQixXQUFvQixFQUNyQixrQkFBc0MsRUFDckMsTUFBYyxFQUNmLFFBQWtCO1lBSGpCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1lBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7WUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUNmLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFckMsQ0FBQztRQUVZLCtCQUFRLEdBQXJCOzs7Ozs7NEJBQ0ksS0FBQSxJQUFJLENBQUE7NEJBQWlCLFdBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFBQTs7NEJBQXBHLEdBQUssYUFBYSxHQUFHLFNBQStFLENBQUM7NEJBQ3JHLEtBQUEsSUFBSSxDQUFBOzRCQUFVLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7NEJBQW5ELEdBQUssTUFBTSxHQUFHLFNBQXFDLENBQUM7Ozs7O1NBQ3ZEO1FBRU0sK0NBQXdCLEdBQS9CLFVBQWdDLFVBQTBCO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVNLGtEQUEyQixHQUFsQyxVQUFtQyxRQUFRLEVBQUUsUUFBUTtZQUNqRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsWUFBWTtvQkFDbkMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDL0IsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUM7UUFDTCxDQUFDO1FBR0wsbUJBQUM7SUFBRCxDQXBDQSxBQW9DQyxJQUFBO0lBbENhO1FBQVQsNEJBQVE7a0NBQXVCLG1DQUFjOzhEQUFDO0lBRnRDLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQyxjQUFPLEVBQUUsdUNBQWtCLEVBQUUsdUJBQU0sRUFBRSxnQkFBUSxDQUFDO3lDQU1qQixjQUFPO1lBQ0QsdUNBQWtCO1lBQzdCLHVCQUFNO1lBQ0wsZ0JBQVE7T0FSNUIsWUFBWSxDQW9DeEI7SUFwQ1ksb0NBQVkiLCJmaWxlIjoiYXBwL3ZpZXdzL2NvaW5vdmVydmlldy9jb2lub3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2luSWRlbnRpZmllciwgQ29pbklkZW50aWZpZXJMaXN0IH0gZnJvbSBcImFwcC9hcGkvY29pbklkZW50aWZpZXJMaXN0XCI7XHJcbmltcG9ydCB7IENvaW5BcGksIENvaW5UYWJsZVJvdyB9IGZyb20gXCJhcHAvYXBpL2NvaW5cIjtcclxuaW1wb3J0IHsgQ2hhcnRBcGkgfSBmcm9tIFwiYXBwL2FwaS9jaGFydFwiO1xyXG5cclxuQGluamVjdChDb2luQXBpLCBDb2luSWRlbnRpZmllckxpc3QsIFJvdXRlciwgQ2hhcnRBcGkpXHJcbmV4cG9ydCBjbGFzcyBDb2luT3ZlcnZpZXcgeyAgICBcclxuICAgIHB1YmxpYyBteURhdGE7XHJcbiAgICBAYmluZGFibGUgYWN0aXZlQ29pbklkZW50aWZpZXI6IENvaW5JZGVudGlmaWVyO1xyXG4gICAgcHVibGljIGNvaW5UYWJsZVJvd3M6IEFycmF5PENvaW5UYWJsZVJvdz47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW5jeUFwaTogQ29pbkFwaSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb2luSWRlbnRpZmllckxpc3Q6IENvaW5JZGVudGlmaWVyTGlzdCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2hhcnRBcGk6IENoYXJ0QXBpKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuY29pblRhYmxlUm93cyA9IGF3YWl0IHRoaXMuY3VycmVuY3lBcGkuZ2V0Q29pbnMoXCJFVVJcIiwgdGhpcy5jb2luSWRlbnRpZmllckxpc3QuY29pbklkZW50aWZpZXJzKTtcclxuICAgICAgICB0aGlzLm15RGF0YSA9IGF3YWl0IHRoaXMuY2hhcnRBcGkuZ2V0QWxsQ2hhcnREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUFjdGl2ZUNvaW5DYXRlZ29yeShpZGVudGlmaWVyOiBDb2luSWRlbnRpZmllcikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ29pbklkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZShcIm92ZXJ2aWV3XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmVDb2luSWRlbnRpZmllckNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7ICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb2luVGFibGVSb3dzLmZvckVhY2goY29pblRhYmxlUm93ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2luVGFibGVSb3cuaWRlbnRpZmllciA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2luVGFibGVSb3cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvaW5UYWJsZVJvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vIGh0dHBzOi8vd2lkZ2V0cy5jcnlwdG9jb21wYXJlLmNvbS9zZXJ2ZS92Mi9jb2luL2NoYXJ0P2ZzeW09QlRDJnRzeW09RVVSJnBlcmlvZD0xRCZhcHA9amRyYWd0LmNvbVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('app/views/news/news',["require", "exports", "aurelia-router", "aurelia-framework", "app/api/coinIdentifierList", "app/api/wordpress"], function (require, exports, aurelia_router_1, aurelia_framework_1, coinIdentifierList_1, wordpress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var News = (function () {
        function News(wordpressApi, coinIdentifierList, router) {
            this.wordpressApi = wordpressApi;
            this.coinIdentifierList = coinIdentifierList;
            this.router = router;
            this.articleId = "";
            this.posts = new Array();
        }
        News.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.articleId) return [3, 2];
                            _a = this;
                            return [4, this.wordpressApi.getPostById(this.articleId)];
                        case 1:
                            _a.selectedArticle = _b.sent();
                            this.setActiveCoinIdentifierByCategoryName(this.selectedArticle.categoryName);
                            return [3, 3];
                        case 2:
                            this.loadPosts();
                            _b.label = 3;
                        case 3: return [2];
                    }
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
        News.prototype.setActiveCoinIdentifierByCategoryName = function (categoryName) {
            var _this = this;
            this.coinIdentifierList.coinIdentifiers.forEach(function (identifier) {
                if (identifier.name == categoryName)
                    _this.activeCoinIdentifier = identifier;
            });
        };
        News.prototype.activeCoinIdentifierChanged = function (newValue, oldValue) {
            this.loadPosts();
        };
        News.prototype.selectArticle = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.router.navigateToRoute("article", { "id": id });
                    return [2];
                });
            });
        };
        News.prototype.articleIdChanged = function (newValue, oldValue) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!newValue) return [3, 2];
                            debugger;
                            _a = this;
                            return [4, this.wordpressApi.getPostById(newValue)];
                        case 1:
                            _a.selectedArticle = _b.sent();
                            return [3, 3];
                        case 2:
                            this.selectedArticle = undefined;
                            _b.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        News.prototype.closeSelectedArticle = function () {
            this.selectedArticle = undefined;
            this.router.navigateToRoute("overview");
        };
        return News;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], News.prototype, "articleId", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", coinIdentifierList_1.CoinIdentifier)
    ], News.prototype, "activeCoinIdentifier", void 0);
    News = __decorate([
        aurelia_framework_1.inject(wordpress_1.WordPressApi, coinIdentifierList_1.CoinIdentifierList, aurelia_router_1.Router),
        __metadata("design:paramtypes", [wordpress_1.WordPressApi, coinIdentifierList_1.CoinIdentifierList, aurelia_router_1.Router])
    ], News);
    exports.News = News;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9uZXdzL25ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLElBQUk7UUFLYixjQUFvQixZQUEwQixFQUFTLGtCQUFzQyxFQUFTLE1BQWM7WUFBaEcsaUJBQVksR0FBWixZQUFZLENBQWM7WUFBUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUpuRyxjQUFTLEdBQVcsRUFBRSxDQUFDO1lBRWhDLFVBQUssR0FBeUIsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFJakUsQ0FBQztRQUVZLHVCQUFRLEdBQXJCOzs7Ozs7aUNBQ1EsSUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjOzRCQUNkLEtBQUEsSUFBSSxDQUFBOzRCQUFtQixXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQTs7NEJBQTFFLEdBQUssZUFBZSxHQUFHLFNBQW1ELENBQUM7NEJBQzNFLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7NEJBRzlFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7O1NBRXhCO1FBRWEsd0JBQVMsR0FBdkI7Ozs7OztpQ0FFUSxJQUFJLENBQUMsb0JBQW9CLEVBQXpCLGNBQXlCOzRCQUN6QixLQUFBLElBQUksQ0FBQTs0QkFBUyxXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBQTs7NEJBQW5GLEdBQUssS0FBSyxHQUFHLFNBQXNFLENBQUM7Ozs0QkFFcEYsS0FBQSxJQUFJLENBQUE7NEJBQVMsV0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFBOzs0QkFBL0MsR0FBSyxLQUFLLEdBQUcsU0FBa0MsQ0FBQzs7Ozs7O1NBRXZEO1FBRU8sb0RBQXFDLEdBQTdDLFVBQThDLFlBQW9CO1lBQWxFLGlCQUlDO1lBSEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUUsVUFBQSxVQUFVO2dCQUMzRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQztvQkFBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVPLDBDQUEyQixHQUFuQyxVQUFvQyxRQUFRLEVBQUUsUUFBUTtZQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVZLDRCQUFhLEdBQTFCLFVBQTJCLEVBQUU7OztvQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUE7Ozs7U0FDdEQ7UUFFWSwrQkFBZ0IsR0FBN0IsVUFBOEIsUUFBUSxFQUFFLFFBQVE7Ozs7OztpQ0FDekMsUUFBUSxFQUFSLGNBQVE7NEJBQ1AsUUFBUSxDQUFDOzRCQUNULEtBQUEsSUFBSSxDQUFBOzRCQUFtQixXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzs0QkFBcEUsR0FBSyxlQUFlLEdBQUcsU0FBNkMsQ0FBQzs7OzRCQUVyRSxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQzs7Ozs7O1NBRXhDO1FBRU0sbUNBQW9CLEdBQTNCO1lBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQXZEQSxBQXVEQyxJQUFBO0lBdERhO1FBQVQsNEJBQVE7OzJDQUErQjtJQUM5QjtRQUFULDRCQUFRO2tDQUE4QixtQ0FBYztzREFBQztJQUY3QyxJQUFJO1FBRGhCLDBCQUFNLENBQUMsd0JBQVksRUFBRSx1Q0FBa0IsRUFBRSx1QkFBTSxDQUFDO3lDQU1YLHdCQUFZLEVBQTZCLHVDQUFrQixFQUFpQix1QkFBTTtPQUwzRyxJQUFJLENBdURoQjtJQXZEWSxvQkFBSSIsImZpbGUiOiJhcHAvdmlld3MvbmV3cy9uZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBDb2luSWRlbnRpZmllckxpc3QsIENvaW5JZGVudGlmaWVyfSBmcm9tIFwiYXBwL2FwaS9jb2luSWRlbnRpZmllckxpc3RcIjtcclxuaW1wb3J0IHsgV29yZFByZXNzQXBpLCBXb3JkUHJlc3NQb3N0IH0gZnJvbSBcImFwcC9hcGkvd29yZHByZXNzXCI7XHJcblxyXG5AaW5qZWN0KFdvcmRQcmVzc0FwaSwgQ29pbklkZW50aWZpZXJMaXN0LCBSb3V0ZXIpXHJcbmV4cG9ydCBjbGFzcyBOZXdzIHtcclxuICAgIEBiaW5kYWJsZSBwdWJsaWMgYXJ0aWNsZUlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQGJpbmRhYmxlIHB1YmxpYyBhY3RpdmVDb2luSWRlbnRpZmllcjogQ29pbklkZW50aWZpZXI7ICAgIFxyXG4gICAgcHJpdmF0ZSBwb3N0czogQXJyYXk8V29yZFByZXNzUG9zdD4gPSBuZXcgQXJyYXk8V29yZFByZXNzUG9zdD4oKTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRBcnRpY2xlOiBXb3JkUHJlc3NQb3N0O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB3b3JkcHJlc3NBcGk6IFdvcmRQcmVzc0FwaSwgcHVibGljIGNvaW5JZGVudGlmaWVyTGlzdDogQ29pbklkZW50aWZpZXJMaXN0LCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhdHRhY2hlZCgpIHsgICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmFydGljbGVJZCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQXJ0aWNsZSA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RCeUlkKHRoaXMuYXJ0aWNsZUlkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVDb2luSWRlbnRpZmllckJ5Q2F0ZWdvcnlOYW1lKHRoaXMuc2VsZWN0ZWRBcnRpY2xlLmNhdGVnb3J5TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQb3N0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQb3N0cygpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVDb2luSWRlbnRpZmllcikgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvc3RzID0gYXdhaXQgdGhpcy53b3JkcHJlc3NBcGkuZ2V0UG9zdHNCeUNvaW4odGhpcy5hY3RpdmVDb2luSWRlbnRpZmllci5uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RzID0gYXdhaXQgdGhpcy53b3JkcHJlc3NBcGkuZ2V0UG9zdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBY3RpdmVDb2luSWRlbnRpZmllckJ5Q2F0ZWdvcnlOYW1lKGNhdGVnb3J5TmFtZTogc3RyaW5nKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLmNvaW5JZGVudGlmaWVyTGlzdC5jb2luSWRlbnRpZmllcnMuZm9yRWFjaCggaWRlbnRpZmllciA9PiB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIubmFtZSA9PSBjYXRlZ29yeU5hbWUpIHRoaXMuYWN0aXZlQ29pbklkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVDb2luSWRlbnRpZmllckNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VsZWN0QXJ0aWNsZShpZCkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwiYXJ0aWNsZVwiLHtcImlkXCI6IGlkIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhcnRpY2xlSWRDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGlmKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQXJ0aWNsZSA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RCeUlkKG5ld1ZhbHVlKTsgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQXJ0aWNsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTZWxlY3RlZEFydGljbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFydGljbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKFwib3ZlcnZpZXdcIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd2Vic2l0ZXMvY29pbmJhc2UvY29pbmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFdBQVc7UUFDcEIscUJBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFJN0IsU0FBSSxHQUFHLHNEQUFzRCxDQUFDO1FBRnJFLENBQUM7UUFJYSw4QkFBUSxHQUF0QixVQUF1QixJQUFZOzs7OztnQ0FFaEIsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFBOzt1Q0FBdkMsU0FBdUM7NEJBQzNDLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzttQ0FBckIsU0FBcUI7NEJBQ2hDLFdBQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFFLEVBQUE7Ozs7U0FDMUU7UUFFWSxxQ0FBZSxHQUE1Qjs7OztnQ0FDVyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7Z0NBQWpDLFdBQU8sU0FBMEIsRUFBQTs7OztTQUNwQztRQUVZLHNDQUFnQixHQUE3Qjs7OztnQ0FDVyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7Z0NBQWpDLFdBQU8sU0FBMEIsRUFBQTs7OztTQUNwQztRQUVZLHNDQUFnQixHQUE3Qjs7OztnQ0FDVyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUE7Z0NBQWpDLFdBQU8sU0FBMEIsRUFBQTs7OztTQUNwQztRQUlMLGtCQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCWSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsaUNBQVUsQ0FBQzt5Q0FFVyxpQ0FBVTtPQUQzQixXQUFXLENBNEJ2QjtJQTVCWSxrQ0FBVyIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL2NvaW5iYXNlL2NvaW5iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuaW1wb3J0IHsgV2Vic2l0ZUNvaW5WYWx1ZSB9IGZyb20gXCJhcHAvYXBpL3dlYnNpdGVzL3dlYnNpdGVDb2luVmFsdWVcIjtcclxuaW1wb3J0ICogYXMgZmV0Y2hKc29ucCBmcm9tIFwiZmV0Y2gtanNvbnBcIjtcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIENvaW5CYXNlQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyAvL1RPRE8gdXNlIG5wbSBwYWNrYWdlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb290ID0gXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvZXhjaGFuZ2UtcmF0ZXM/Y3VycmVuY3k9XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRQcmljZShjb2luOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMucm9vdCArIGNvaW4pO1xyXG4gICAgICAgIHZhciBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJzaXRlQ29pblZhbHVlKFwiQ29pbmJhc2VcIiwgY29pbiAsIGpzb24uZGF0YS5yYXRlc1tcIkVVUlwiXSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhc3luYyBnZXRCaXRjb2luUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0UHJpY2UoXCJCVENcIikgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRFdGhlcmV1bVByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFByaWNlKFwiRVRIXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldExpdGVDb2luUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0UHJpY2UoXCJMVENcIilcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

"use strict";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBpL3dlYnNpdGVzL2xpdGViaXQvbGl0ZWJpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define("app/api/websites/litebit/litebit", [],function(){});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=bootstrap/css/bootstrap.css></require><require from=./styles.css></require><router-view></router-view></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = ".nav li:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-brand.kriptologo {\r\n    color: #a0d7fd;\r\n}\r\n\r\n.clickable:hover\r\n{\r\n    background: #efefef;\r\n    cursor: pointer;\r\n}\r\n\r\n.selected {\r\n    background: #eee;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n\r\n.close-button {\r\n    color: #333;\r\n}\r\n\r\n.close-button:hover {\r\n    color: #666;\r\n    cursor: pointer;\r\n}\r\n"; });
define('text!app/views/buyandcompare.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"coin of coins\">Website: ${coin.websiteName} Munt: ${coin.coinName} Prijs: ${coin.coinPrice}</div></template>"; });
define('text!app/views/overview.html', ['module'], function(module) { module.exports = "<template><require from=./news/news></require><require from=./coinoverview/coinoverview></require><nav class=\"navbar navbar-inverse\" style=border-radius:0><div class=container-fluid><div class=navbar-header><a class=\"navbar-brand kriptologo\" href=# click.delegate=resetActiveCoin()>Kripto</a></div><ul class=\"nav navbar-nav\"><li repeat.for=\"identifier of coinIdentifierList.coinIdentifiers\" class=\"${identifier.active ? 'active' : ''}\" click.delegate=changeActiveCoin(identifier)><a>${identifier.name}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=#><span style=margin-right:10px class=\"glyphicon glyphicon-earphone\"></span>Contact</a></li></ul></div></nav><div class=container-fluid><div class=row><div class=col-md-6><news active-coin-identifier.two-way=activeCoinIdentifier article-id.bind=articleId></news></div><div class=\"col-md-6 list-group\"><coin-overview active-coin-identifier.two-way=activeCoinIdentifier></coin-overview></div></div></div></template>"; });
define('text!app/views/coinoverview/coinoverview.html', ['module'], function(module) { module.exports = "<template><table class=\"table table-bordered\"><thead><tr><th>Naam</th><th>Prijs</th><th>Verschil 24H</th></tr></thead><tbody><tr repeat.for=\"coinTableRow of coinTableRows\" click.delegate=changeActiveCoinCategory(coinTableRow.identifier) class=\"clickable ${coinTableRow.active ? 'selected' : ''}\"><td><img src=\"${coinTableRow.imageUrl}?width=32&height=32\"> ${coinTableRow.identifier.name}</td><td>${coinTableRow.price}</td><td class=\"${coinTableRow.percentChange > 0 ? 'green' : 'red'}\">${coinTableRow.percentChange}%</td></tr></tbody></table><div if.bind=myData><h1>Chart:</h1><chart type=line data.bind=myData></chart></div></template>"; });
define('text!app/views/news/article.html', ['module'], function(module) { module.exports = ""; });
define('text!app/views/news/news.html', ['module'], function(module) { module.exports = "<template><div class=list-group><div show.bind=!selectedArticle repeat.for=\"post of posts\" class=\"list-group-item clickable\"><div if.bind=$first class=row style=\"margin:5px 10px\" click.delegate=selectArticle(post.id)><div class=\".thumbnail col-md-4\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h1>${post.title}</h1></div><div class=col-md-12 innerhtml=${post.content} style=padding-top:10px></div></div><div if.bind=!$first class=row style=\"margin:5px 10px\" click.delegate=selectArticle(post.id)><div class=\".thumbnail col-md-4 d-flex align-items-center\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h3>${post.title}</h3></div></div></div><div if.bind=selectedArticle class=list-group-item><div class=row><div class=col-md-12><a title=Close class=close-button click.delegate=closeSelectedArticle()><i class=\"glyphicon glyphicon-remove icon-arrow-right pull-right\"></i></a></div><div class=\"col-md-4 col-md-offset-4\"><img src=${selectedArticle.featuredImageSrc} style=width:100%></div><div class=col-md-12><h1>${selectedArticle.title}</h1></div><div class=col-md-12 innerhtml=${selectedArticle.content} style=padding-top:10px></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map