export function appearPageProfile() {
    const a = document.querySelector('.navigation__item-profile');
    const content = document.querySelector('#content');
    a.addEventListener('click', function() {
        a.classList.add('active');
        content.innerHTML = 'defghiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
    })
}