function addBackgroundImg() {
    const root = document.documentElement;

    root.style.setProperty('--background-url', 'url(' + backgroundUrl + ')');
    root.style.setProperty('--background-position', backgroundPosition);
};

addBackgroundImg();