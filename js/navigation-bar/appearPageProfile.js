export function appearPageProfile() {
    const a = document.querySelector('.navigation__item-profile');
    const content = document.querySelector('#content');
    a.addEventListener('click', function() {
        a.classList.add('active');
        if (content.querySelector('.main')) {
            content.querySelector('.main').style.display = 'none';
        }
    })
}