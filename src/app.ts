import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(Router)
export class App {
  constructor(private router: Router) {

  }
  configureRouter(config, router) {
    
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root ="/";
    config.map([      
      { route: ['', '/:id'], name: 'home', moduleId: 'app/views/overview' }
      
      
    ]);
    this.router = router;
  }
}
