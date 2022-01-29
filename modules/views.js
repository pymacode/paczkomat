
import { validateForm } from "./validation.js";
import { toggleClass, blurElement } from "./utils.js";

export function changeViewToForm() {
    toggleClass('.main__button');
    toggleClass('.form');
}

export function changeViewToModal(e) {
    e.preventDefault();
    if (!validateForm()) return;
    else {
        blurElement('.wrapper');
        toggleClass('.loader');
        setTimeout(() => {
            toggleClass('.loader');
            toggleClass('.modal');
        }, 1000);
    }
}

export function changeViewToStart() {
    blurElement('.wrapper')
    toggleClass('.modal');
    toggleClass('.form');
    toggleClass('.main__button');
}

export function changeViewToFormFromModal() {
    blurElement('.wrapper')
    toggleClass('.modal');
}


