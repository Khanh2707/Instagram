export function appearPageExpolre() {
    const a = document.querySelector('.navigation__item-explore');
    const content = document.querySelector('.content');
    a.addEventListener('click', function() {
        a.classList.add('active');
        content.innerHTML = 'def';
    })
}