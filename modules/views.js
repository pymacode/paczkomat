const mainContainer = document.querySelector('.main');

export function switchClass(elementClass) {
    return document.querySelector(elementClass).classList.toggle('hidden');
};


export function changeViewToForm() {
    switchClass('.main__button');
    switchClass('.form');
}

export function changeViewToModal(e) {
    e.preventDefault();
    //Space for loader
    setTimeout(() => switchClass('.modal'), 1500);
}

export function changeViewToStart() {
    switchClass('.modal');
    switchClass('.form');
    switchClass('.main__button');
}

export function changeViewToFormFromModal() {
    switchClass('.modal');
}


