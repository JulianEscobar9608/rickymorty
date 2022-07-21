'use strict';

export class CharacterModel {

    #privateId;
    #privateName;
    #privateImage

    constructor(id,name,image) {
        this.#privateId = id;
        this.#privateName = name;
        this.#privateImage= image;
    }

    get Name() {
        return this.#privateName;
    }

    set Name(name) {
        this.#privateName = name;
    }

    get Image() {
        return this.#privateImage;
    }

    set Image(image) {
        this.#privateImage = image;
    }

    toString() {
        return `${this.#privateName} ${this.#privateImage}`;
    }
}