
import { CharacterModel } from "../character.model.mjs";

export class RickAndMortyService {

    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

    async getCharacters(){
        const rickMortyData = await this.#getData();
        const arrayCharacters = new Array();
        rickMortyData.results.forEach((character)=>{
            
            arrayCharacters.push(new CharacterModel(character.id,character.name,character.image));
        
        });
        return arrayCharacters;

    }
    
    async #getData() {
        return fetch(`${this.#privateUrl}/character`).then(response => response.json());
    }

    

}