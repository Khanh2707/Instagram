export function appearPageHome() {
    const a = document.querySelector('.navigation__item-home');
    const content = document.querySelector('.content');
    a.addEventListener('click', function() {
        a.classList.add('active');
        content.innerHTML = 'abc';
    })
}