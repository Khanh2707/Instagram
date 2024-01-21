export function appearModalNewInbox() {
const list_inbox__new_inbox = document.querySelector('.list_inbox__new_inbox');
const not_select_inbox__button = document.querySelector('.not_select_inbox__button');

    $('.modal__body').load('modal/modal-pageMessage/modalNewInbox.html', function() {
        const modal = document.querySelector('.modal');
        const modal__overlay = document.querySelector('.modal__overlay');
        const modal__xmark = document.querySelector('.modal__xmark');

        const modal__new_inbox = document.querySelector('.modal__new_inbox');

        list_inbox__new_inbox.addEventListener('click', function() {
            modal.style.display = 'flex';
            modal__new_inbox.style.display = 'block';
        });

        modal__overlay.addEventListener('click', function(event) {
            modal.style.display = 'none';
        });

        modal__xmark.addEventListener('click', function(event) {
            modal.style.display = 'none';
        });
    });
}