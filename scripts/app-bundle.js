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
                        case 0: return [4, this.http.fetch(this.wordpressRoot + "posts?_embed")];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            posts = _a.sent();
                            parsedPosts = new Array();
                            posts.forEach(function (post) {
                                parsedPosts.push(new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcGkvd29yZHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxZQUFZO1FBQ3JCLHNCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSTVCLGtCQUFhLEdBQVcsNkNBQTZDLENBQUE7UUFGN0UsQ0FBQztRQUlZLCtCQUFRLEdBQXJCOztxQ0FLUSxXQUFXOzs7Z0NBSEEsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxFQUFBOzt1Q0FBMUQsU0FBMEQ7NEJBRTdELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQ0FBckIsU0FBcUI7MENBQ2YsSUFBSSxLQUFLLEVBQWlCOzRCQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQ0FDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7NEJBQzlJLENBQUMsQ0FBQyxDQUFDOzRCQUNILFdBQU8sV0FBVyxFQUFDOzs7O1NBRXRCO1FBQ0wsbUJBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBbkJZLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQyxpQ0FBVSxDQUFDO3lDQUVXLGlDQUFVO09BRDNCLFlBQVksQ0FtQnhCO0lBbkJZLG9DQUFZO0lBcUJ6QjtRQUNBLHVCQUNXLEVBQVUsRUFDVixLQUFhLEVBQ2IsT0FBZSxFQUNmLGdCQUF3QjtZQUh4QixPQUFFLEdBQUYsRUFBRSxDQUFRO1lBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNiLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFBSSxDQUFDO1FBRXhDLG9CQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxzQ0FBYSIsImZpbGUiOiJhcHAvYXBpL3dvcmRwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NBcGkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHdvcmRwcmVzc1Jvb3QgOnN0cmluZyA9IFwiaHR0cDovL3d3dy5qZHJhZ3QuY29tL0tyaXB0by93cC1qc29uL3dwL3YyL1wiIFxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRQb3N0cygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmZldGNoKHRoaXMud29yZHByZXNzUm9vdCArIFwicG9zdHM/X2VtYmVkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSAgICAgICAgXHJcbiAgICAgICAgbGV0IHBhcnNlZFBvc3RzID0gbmV3IEFycmF5PFdvcmRQcmVzc1Bvc3Q+KCk7XHJcbiAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFyc2VkUG9zdHMucHVzaChuZXcgV29yZFByZXNzUG9zdChwb3N0LmlkLCBwb3N0LnRpdGxlLnJlbmRlcmVkLCBwb3N0LmNvbnRlbnQucmVuZGVyZWQsIHBvc3QuX2VtYmVkZGVkW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXS5zb3VyY2VfdXJsKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkUG9zdHM7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JkUHJlc3NQb3N0IHtcclxuY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZSA6c3RyaW5nLFxyXG4gICAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyxcclxuICAgIHB1YmxpYyBmZWF0dXJlZEltYWdlU3JjOiBzdHJpbmcgKSB7fVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('app/views/overview',["require", "exports", "aurelia-framework", "app/api/wordpress"], function (require, exports, aurelia_framework_1, wordpress_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9vdmVydmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsT0FBTztRQUNoQixpQkFBb0IsWUFBMEI7WUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFOUMsQ0FBQztRQUdZLDBCQUFRLEdBQXJCOzs7Ozs7NEJBRUksS0FBQSxJQUFJLENBQUE7NEJBQVMsV0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFBOzs0QkFBL0MsR0FBSyxLQUFLLEdBQUcsU0FBa0MsQ0FBQzs7Ozs7U0FFbkQ7UUFDTCxjQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSxPQUFPO1FBRG5CLDBCQUFNLENBQUMsd0JBQVksQ0FBQzt5Q0FFaUIsd0JBQVk7T0FEckMsT0FBTyxDQVduQjtJQVhZLDBCQUFPIiwiZmlsZSI6ImFwcC92aWV3cy9vdmVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgV29yZFByZXNzQXBpLCBXb3JkUHJlc3NQb3N0IH0gZnJvbSBcImFwcC9hcGkvd29yZHByZXNzXCI7XHJcblxyXG5AaW5qZWN0KFdvcmRQcmVzc0FwaSlcclxuZXhwb3J0IGNsYXNzIEJpdGNvaW4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB3b3JkcHJlc3NBcGk6IFdvcmRQcmVzc0FwaSkgeyBcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcG9zdHM6IEFycmF5PFdvcmRQcmVzc1Bvc3Q+O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnBvc3RzID0gYXdhaXQgdGhpcy53b3JkcHJlc3NBcGkuZ2V0UG9zdHMoKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=bootstrap/css/bootstrap.css></require><router-view></router-view></template>"; });
define('text!app/views/overview.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-inverse\" style=border-radius:0><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=#>Kripto</a></div><ul class=\"nav navbar-nav\"><li class=active><a href=#>Bitcoin</a></li><li><a href=#>Ethereum</a></li><li><a href=#>Litecoin</a></li><li><a href=#>DigitalCash</a></li><li><a href=#>Monero</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=#><span style=margin-right:10px class=\"glyphicon glyphicon-earphone\"></span>Contact</a></li></ul></div></nav><div class=container-fluid><div class=row><div class=col-md-4><div class=list-group><div repeat.for=\"post of posts\" class=list-group-item><div if.bind=$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h1>${post.title}</h1></div><div class=col-md-12 innerhtml=${post.content} style=padding-top:10px></div></div><div if.bind=!$first class=row style=\"margin:5px 10px\"><div class=\".thumbnail col-md-4 d-flex align-items-center\"><img src=${post.featuredImageSrc} style=width:100%></div><div class=col-md-8><h3>${post.title}</h3></div></div></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map