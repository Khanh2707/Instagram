export function activeTabInNavbarPost() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const navbar_post_page_profile__tabs = $$('.navbar_post_page_profile__tab');
    const content_post_container__panes = $$('.content_post_container__pane');

    navbar_post_page_profile__tabs.forEach((tab, index) => {
        const content_post_container__pane = content_post_container__panes[index];
        tab.addEventListener('click', function() {
            $('.navbar_post_page_profile__tab.active').classList.remove('active');
            $('.content_post_container__pane.active').classList.remove('active');
            
            this.classList.add('active');
            content_post_container__pane.classList.add('active');
        })
    });
}