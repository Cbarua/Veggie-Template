const header = document.querySelector('header');

setInterval(() => {
    header.classList.add('fade');
    setTimeout(() => {
        header.classList.toggle('hero-bg2');
        header.classList.remove('fade');
    }, 1000);
}, 5000);