import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { CoinIdentifierList } from "app/api/coinIdentifierList";

@inject(Router, CoinIdentifierList)
export class App {
  constructor(private router: Router,
    public coinIdentifierList: CoinIdentifierList) {
  }
  configureRouter(config, router) {

    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      { route: '',  name: 'overview', moduleId: 'app/views/overview'},
      { route: '/:id', name: 'article', moduleId: 'app/views/overview' }
    ]);
    this.router = router;
  }  
}
