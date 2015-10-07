import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {CharacterService} from './character.service';
import {Character} from './character';


@Component({ selector: 'character-details' })
@View({
	templateUrl: 'app/character-details.html',
	directives: [],
	styles: [`
		.character-container: {}
	`]
})
export class CharacterDetailsComponent{
		public character: Character;
		private _characterId: number;

  		constructor(private _routeParams: RouteParams, private _characterService: CharacterService) {
		  this._characterId = +_routeParams.get('characterId'); // The + symbol casts the string to a number type
		  this.getCharacter(this._characterId);
	   }
	   
	   private getCharacter(characterId: number){
		   this._characterService.getCharacter(characterId)
		   .then((responseCharacter) => {return this.setCharacter(responseCharacter);} )
		   .catch(this.catchCharacterError); 
	   }
	   
	   private setCharacter(givenCharacter: Character){
		   this.character = givenCharacter;
		   return this.character;
	   }
	   
	   private catchCharacterError(reason: any){
		   console.log(reason);
	   }
}