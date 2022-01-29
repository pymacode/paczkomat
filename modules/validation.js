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
        document.querySelector(`.${field.name}--error`).classList.remove('hidden');
    }
    else {
        field.classList.remove('field-error');
        document.querySelector(`.${field.name}--error`).classList.add('hidden');
    }
}

function unlockButton() {
    if (!numberFieldTest(numberField) || !codeFieldTest(codeField)) {
        return document.querySelector('.form__button').disabled = true;

    } else {
        document.querySelector('.form__button').disabled = false;
    }
}

function clearInputsValue(inputs) {
    inputs.map(input => input.value = '');
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