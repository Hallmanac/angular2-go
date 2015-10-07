import {DashboardComponent} from './dashboard.component';
import {CharactersComponent} from './characters.component';
import {CharacterDetailsComponent} from './characterDetails.component';

export var Routes = {
	dashboard: {
		path: '/',
		as: 'Dashboard',
		component: DashboardComponent
	},
	
	characters: {
		path: '/characters',
		as: 'Characters',
		component: CharactersComponent
	},
	
	characterDetails: {
		path: '/characters/:characterId',
		as: 'CharacterDetails',
		component: CharacterDetailsComponent
	}
}

export const APP_ROUTES = [this.Routes.dashboard, this.Routes.characters, this.Routes.characterDetails];