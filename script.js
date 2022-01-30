document.querySelector('.nojs').classList.remove('nojs');
const menuItemBtns = document.querySelectorAll('.menu-group__item');
const menuItemLists = document.querySelectorAll('.menu-items__row');

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

window.addEventListener('load', () => {
    const animatables = document.querySelectorAll('.animatable');
    const animatableChildren = document.querySelectorAll('.animatable-children');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    animatables.forEach(e => observer.observe(e));
    animatableChildren.forEach(e => observer.observe(e));
});