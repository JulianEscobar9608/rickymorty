'use strict';

import { Utilities } from "./utilities.mjs";

export class CharacterView {
    #privateBody;

    constructor() {
        document.title = "PERSONAJES RICK Y MORTY";
        this.#privateBody = document.querySelector('body');
    }

    init(characters) {
        characters.forEach((character)=>{

            const card = Utilities.createCard();
            const title = Utilities.createTitle();
            title.textContent = character.Name;
            const image = Utilities.createImage();
            image.src = character.Image;
            card.append(title,image);
            this.#privateBody.append(card);

        });
    }

}