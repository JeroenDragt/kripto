import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(Router)
export class App {
  constructor(private router: Router) {

  }
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: [''], name: 'home', moduleId: 'app/views/overview' }

    ]);
  }
}
