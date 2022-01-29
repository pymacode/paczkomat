export function toggleClass(elementClass, classToToggle = 'hidden') {
    return document.querySelector(elementClass).classList.toggle(classToToggle);
};
export function blurElement(elementClass) {
    document.querySelector(elementClass).classList.toggle('blurred');
}


export function changeViewToForm() {
    toggleClass('.main__button');
    toggleClass('.form');
}

export function changeViewToModal(e) {
    e.preventDefault();
    blurElement('.wrapper');
    toggleClass('.loader');
    setTimeout(() => {
        toggleClass('.loader');
        toggleClass('.modal');
    }, 1500);
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


