const menuItemBtns = document.querySelectorAll('.group-item');
const menuItemLists = document.querySelectorAll('.menu-items .row');

const resetState = (elements, className) => elements.forEach(element => element.classList.remove(className));
/* another way of doing it */
// elements[0].parentElement.querySelector(`.${className}`).classList.remove(className);

for (let i = 0; i < menuItemBtns.length; i++) {
    menuItemBtns[i].addEventListener('click', e => {
        if (e.target.classList.contains('selected')) {
            return;
        }

        resetState(menuItemBtns, 'selected');
        resetState(menuItemLists, 'show');
        e.target.classList.add('selected');
        menuItemLists[i].classList.add('show');
    });
}

const banner = document.querySelector('.banner');
const items = document.querySelectorAll('.item');
const specialTexts = document.querySelectorAll('#specials .text-container');
const aboutTexts = document.querySelectorAll('#about .about-content');
const contactForm = document.querySelector('.contact-form');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            return;
        }
    });
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-children');
            return;
        }
    });
});

banner.classList.remove('animate');
contactForm.classList.remove('animate');

observer1.observe(banner);
observer1.observe(contactForm);

items.forEach(e => {
    e.classList.remove('animate-children');
    observer2.observe(e);
});
specialTexts.forEach(e => {
    e.classList.remove('animate-children');
    observer2.observe(e);
});
aboutTexts.forEach(e => {
    e.classList.remove('animate-children');
    observer2.observe(e);
});