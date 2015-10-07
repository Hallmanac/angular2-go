import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {APP_ROUTES} from './routes.config';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['./Dashboard']">Dashboard</a>
    <a [router-link]="['./Characters']">Characters</a>
    <a [router-link]="['./CharacterDetails', { 'characterId': 11}]">Characters-Link</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {}

// { path: '/', as: 'Dashboard', component: DashboardComponent },
//   { path: '/characters', as: 'Characters', component: CharactersComponent },
//   { path: '/characters/:characterId', as: 'CharacterDetails',  component: CharacterDetailsComponent}

// import {CharactersComponent} from './characters.component';
// import {DashboardComponent} from './dashboard.component';
// import {CharacterDetailsComponent} from './characterDetails.component';