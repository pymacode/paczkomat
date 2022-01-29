import { changeViewToForm, changeViewToModal, changeViewToStart, changeViewToFormFromModal } from "./views.js";

const startButton = document.querySelector('.main__button');
const formButton = document.querySelector('.form__button');
const nextButton = document.querySelector('.modal__button--next');
const doneButton = document.querySelector('.modal__button--done');

export function activateListeners() {
    startButton.addEventListener('click', changeViewToForm);
    formButton.addEventListener('click', changeViewToModal);
    doneButton.addEventListener('click', changeViewToStart);
    nextButton.addEventListener('click', changeViewToFormFromModal);
};
