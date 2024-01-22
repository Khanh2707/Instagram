export function changeIconWhenActive() {
    const navigation__items = document.querySelectorAll('.navigation__item');
    let noActiveElement = null;
    let activeElement = null;
    navigation__items.forEach(function(item) {
        if (!(item.classList.contains('search_input_in_page_search') || item.classList.contains('navigation__item-profile'))) {
            if (item.classList.contains('active')) {
                noActiveElement = item.querySelector('.navigation__item-logo--no_active');
                activeElement = item.querySelector('.navigation__item-logo--active');
                noActiveElement.style.display = 'none';
                activeElement.style.display = 'block';
            }
            else {
                noActiveElement = item.querySelector('.navigation__item-logo--no_active');
                activeElement = item.querySelector('.navigation__item-logo--active');
                noActiveElement.style.display = 'block';
                activeElement.style.display = 'none';
            }
        }
    });
}