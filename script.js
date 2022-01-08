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