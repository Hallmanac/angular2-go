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
		private _character: Character;
		private _characterId: number;

  		constructor(private _routeParams: RouteParams, private _characterService: CharacterService) {
		  this._characterId = +_routeParams.get('characterId'); 
	   }
	   
	   get currentCharacter(){
		   return this._character || this.getCharacter(this._characterId);
	   }
	   
	   private getCharacter(characterId: number){
		   this._characterService.getCharacter(characterId).then(this.setCharacter).catch(this.catchCharacterError);
	   }
	   
	   private setCharacter(givenCharacter: Character){
		   this.currentCharacter = givenCharacter;
	   }
	   
	   private catchCharacterError(reason: any){
		   console.log(reason);
	   }
}