export function appearModalNewPost24h() {
    const add_post_container = document.querySelector('.add_post_container');

    add_post_container.addEventListener('click', function() {
        $('.modal__body').load('modal/modal-pageProfile/modalNewPost24h.html', function() {
            const modal = document.querySelector('.modal');
            const modal__overlay = document.querySelector('.modal__overlay');
            const modal__xmark = document.querySelector('.modal__xmark');

            const modal__new_post_24h = document.querySelector('.modal__new_post_24h');

            modal.style.display = 'flex';
            modal__new_post_24h.style.display = 'block';

            modal__overlay.addEventListener('click', function(event) {
                modal.style.display = 'none';
            });

            modal__xmark.style.display = 'none';
        });
    });
}