export function checkNavigationActive() {
    const navigation__items = document.querySelectorAll('.navigation__item');
    const content = document.querySelector('.content');
    var previousActiveElement = document.querySelector('.navigation__item-home');
    var previousActiveElements = [];
    let activeLevel2 = false;

    function getItemLevel(item) {
        return parseInt(item.dataset.level);
    }

    function removeActiveByLevel(previousActiveElements, item) {
        if (getItemLevel(item) === 1) {
            previousActiveElements.forEach(value => {
                if (getItemLevel(value) === 1) {
                    value.classList.remove('active');
                }
                else {
                    activeLevel2 = true;
                    value.click();
                }
            });
            previousActiveElements.length = 0;
        }
        if (getItemLevel(item) === 2) {
            previousActiveElements.forEach(value => {
                if (getItemLevel(value) > 1) {
                    if (value !== item) {
                        activeLevel2 = true;
                        value.click();
                    }
                }
            });
            previousActiveElements.splice(1);
        }
        if (getItemLevel(item) === 3) {
            previousActiveElements.forEach(value => {
                if (getItemLevel(value) > 2) {
                    if (value !== item) {
                        activeLevel2 = true;
                        value.click();
                    }
                }
            });
            previousActiveElements.splice(2);
        }
        if (getItemLevel(item) === 4) {
            previousActiveElements.forEach(value => {
                if (getItemLevel(value) > 3) {
                    if (value !== item) {
                        activeLevel2 = true;
                        value.click();
                    }
                }
            });
            previousActiveElements.splice(2);
        }
        console.log(previousActiveElements)
        console.log('item', item);
    }

    navigation__items.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (activeLevel2 === false) {
                solve(event, item);
                changeIconWhenActive();
            }
            else
                activeLevel2 = false;
        });
    });

    function solve(event, item) {
        Array.from(navigation__items).forEach(function(navItem) {
            if (navItem.classList.contains('active') && previousActiveElement !== item && 'level' in navItem.dataset && 'level' in item.dataset) {
                if (!previousActiveElements.includes(navItem))
                    previousActiveElements.push(navItem);
            }
        });
        previousActiveElement = item;
        if (previousActiveElements.length > 0) {
            removeActiveByLevel(previousActiveElements, item);
        }
    }

    document.addEventListener('click', function(event) {
        navigation__items.forEach(value => {
            if (content.contains(event.target)) {
                if (getItemLevel(value) === 2) {
                    if (value.classList.contains('active')) {
                        activeLevel2 = true;
                        value.click();
                    }
                }
            }
            if (!(event.target.classList.contains('navigation__item-see_more') || event.target.closest('.navigation__item-see_more'))) {
                if (value.classList.contains('navigation__item-see_more') && value.classList.contains('active')) {
                    activeLevel2 = true;
                    value.click();
                }
            }
        });
    });


    function changeIconWhenActive() {
        let noActiveElement = null;
        let activeElement = null;
        navigation__items.forEach(function(item) {
            if (!(item.classList.contains('search_input_in_page_search') || item.classList.contains('navigation__item-profile'))) {
                if (item.classList.contains('active')) {
                    console.log(item)
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
        console.log('abc')
    }

    changeIconWhenActive();
}