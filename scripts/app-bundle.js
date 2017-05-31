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
                { route: [''], name: 'home', moduleId: 'app/views/bitcoin' }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLEdBQUc7UUFDZCxhQUFvQixNQUFjO1lBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVsQyxDQUFDO1FBQ0QsNkJBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsTUFBTTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7YUFFN0QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILFVBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLHVCQUFNLENBQUM7eUNBRWUsdUJBQU07T0FEdkIsR0FBRyxDQVlmO0lBWlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcblxuQGluamVjdChSb3V0ZXIpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2FwcC92aWV3cy9iaXRjb2luJyB9XG5cbiAgICBdKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
                var response, posts, parsedPosts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "posts")];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            posts = _a.sent();
                            parsedPosts = new Array();
                            posts.forEach(function (post) {
                                parsedPosts.push(new WordPressPost(post.title.rendered, post.content.rendered));
                            });
                            return [2, parsedPosts];
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
        function WordPressPost(title, content) {
            this.title = title;
            this.content = content;
        }
        return WordPressPost;
    }());
    exports.WordPressPost = WordPressPost;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd29yZHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxZQUFZO1FBQ3JCLHNCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTVCLGtCQUFhLEdBQVcsNkNBQTZDLENBQUE7UUFGN0UsQ0FBQztRQUlZLCtCQUFRLEdBQXJCOztxQ0FNUSxXQUFXOzs7Z0NBSkEsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxFQUFBOzt1Q0FBbkQsU0FBbUQ7NEJBRXRELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7MENBRWYsSUFBSSxLQUFLLEVBQWlCOzRCQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQ0FDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTs0QkFDbkYsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsV0FBTyxXQUFXLEVBQUM7Ozs7U0FFdEI7UUFDTCxtQkFBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksWUFBWTtRQUR4QiwwQkFBTSxDQUFDLGlDQUFVLENBQUM7eUNBRVcsaUNBQVU7T0FEM0IsWUFBWSxDQW9CeEI7SUFwQlksb0NBQVk7SUFzQnpCO1FBQ0EsdUJBQW1CLEtBQWEsRUFDekIsT0FBZTtZQURILFVBQUssR0FBTCxLQUFLLENBQVE7WUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFJLENBQUM7UUFFM0Isb0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLHNDQUFhIiwiZmlsZSI6ImFwcC9hcGkvd29yZHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIFdvcmRQcmVzc0FwaSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgd29yZHByZXNzUm9vdCA6c3RyaW5nID0gXCJodHRwOi8vd3d3LmpkcmFndC5jb20vS3JpcHRvL3dwLWpzb24vd3AvdjIvXCIgXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFBvc3RzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZmV0Y2godGhpcy53b3JkcHJlc3NSb290ICsgXCJwb3N0c1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGFyc2VkUG9zdHMgPSBuZXcgQXJyYXk8V29yZFByZXNzUG9zdD4oKTtcclxuICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXJzZWRQb3N0cy5wdXNoKG5ldyBXb3JkUHJlc3NQb3N0KHBvc3QudGl0bGUucmVuZGVyZWQsIHBvc3QuY29udGVudC5yZW5kZXJlZCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFBvc3RzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV29yZFByZXNzUG9zdCB7XHJcbmNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZSA6c3RyaW5nLFxyXG5wdWJsaWMgY29udGVudDogc3RyaW5nICkge31cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('app/views/bitcoin',["require", "exports", "aurelia-framework", "app/api/wordpress"], function (require, exports, aurelia_framework_1, wordpress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bitcoin = (function () {
        function Bitcoin(wordpressApi) {
            this.wordpressApi = wordpressApi;
        }
        Bitcoin.prototype.activate = function () {
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
        aurelia_framework_1.inject(wordpress_1.WordPressApi),
        __metadata("design:paramtypes", [wordpress_1.WordPressApi])
    ], Bitcoin);
    exports.Bitcoin = Bitcoin;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9iaXRjb2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxPQUFPO1FBQ2hCLGlCQUFvQixZQUEwQjtZQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUU5QyxDQUFDO1FBR1ksMEJBQVEsR0FBckI7Ozs7Ozs0QkFFSSxLQUFBLElBQUksQ0FBQTs0QkFBUyxXQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUE7OzRCQUEvQyxHQUFLLEtBQUssR0FBRyxTQUFrQyxDQUFDOzs7OztTQUVuRDtRQUNMLGNBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLE9BQU87UUFEbkIsMEJBQU0sQ0FBQyx3QkFBWSxDQUFDO3lDQUVpQix3QkFBWTtPQURyQyxPQUFPLENBV25CO0lBWFksMEJBQU8iLCJmaWxlIjoiYXBwL3ZpZXdzL2JpdGNvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFdvcmRQcmVzc0FwaSwgV29yZFByZXNzUG9zdCB9IGZyb20gXCJhcHAvYXBpL3dvcmRwcmVzc1wiO1xyXG5cclxuQGluamVjdChXb3JkUHJlc3NBcGkpXHJcbmV4cG9ydCBjbGFzcyBCaXRjb2luIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd29yZHByZXNzQXBpOiBXb3JkUHJlc3NBcGkpIHsgXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHBvc3RzOiBBcnJheTxXb3JkUHJlc3NQb3N0PjtcclxuICAgIFxyXG4gICAgcHVibGljIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3N0cyA9IGF3YWl0IHRoaXMud29yZHByZXNzQXBpLmdldFBvc3RzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!app/views/bitcoin.html', ['module'], function(module) { module.exports = "<template>Bitcoin<div repeat.for=\"post of posts\"><h1>${post.title}</h1><p>${post.content}</p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map