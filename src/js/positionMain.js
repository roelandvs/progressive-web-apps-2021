function positionMain() {
    const header = document.querySelector('header');
    const root = document.documentElement;

    // if header is taller then screen the main must positioned lower
    if (header.offsetHeight + 250 > screen.height) {
        root.style.setProperty('--main-top', header.offsetHeight + 150 + 'px');
    } else if (window.innerWidth < 1100) {
        root.style.setProperty('--main-top', window.innerHeight - 55 + 'px');
    };
};

positionMain();