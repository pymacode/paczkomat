export function toggleClass(elementClass, classToToggle = 'hidden') {
    return document.querySelector(elementClass).classList.toggle(classToToggle);
};
export function blurElement(elementClass) {
    document.querySelector(elementClass).classList.toggle('blurred');
}

export function addClassToElement(el, cls) {
    return document.querySelector(el).classList.add(cls);
}

export function removeClassFromElement(el, cls) {
    return document.querySelector(el).classList.remove(cls);
}

export function clearInputsValue(inputs) {
    inputs.map(input => input.value = '');
}