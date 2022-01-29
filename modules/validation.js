import { addClassToElement, removeClassFromElement, clearInputsValue } from "./utils.js";
const numberField = document.querySelector('.form__input--number');
const codeField = document.querySelector('.form__input--code');

export function numberFieldTest(field) {
    const reg = /^[0-9]{9}$/;
    return reg.test(field.value);
}
export function codeFieldTest(field) {
    const reg = /^[0-9]{4}$/;
    return reg.test(field.value);
}
function markField(field, isMarked) {
    unlockButton();
    if (isMarked) {
        field.classList.add('field-error');
        removeClassFromElement(`.${field.name}--error`, 'hidden');
    }
    else {
        field.classList.remove('field-error');
        addClassToElement(`.${field.name}--error`, 'hidden');
    }
}

function unlockButton() {
    if (!numberFieldTest(numberField) || !codeFieldTest(codeField)) {
        return document.querySelector('.form__button').disabled = true;

    } else {
        document.querySelector('.form__button').disabled = false;
    }
}

numberField.addEventListener('input', e => markField(e.target, !numberFieldTest(e.target)));
codeField.addEventListener('input', e => markField(e.target, !codeFieldTest(e.target)));

export function validateForm() {
    if (!numberFieldTest(numberField) || !codeFieldTest(codeField)) {
        return false;
    } else {
        clearInputsValue([numberField, codeField]);
        unlockButton();
        return true;
    }

}