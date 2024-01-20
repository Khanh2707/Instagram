
    const information_detail_inbox = document.querySelector('.information_detail_inbox');
    const detail_inbox__header__icon_optionInformation_inbox = document.querySelector('.detail_inbox__header__icon_option-information_inbox');

    document.addEventListener('click', function(event) {
        if (detail_inbox__header__icon_optionInformation_inbox.contains(event.target)) {
            information_detail_inbox.classList.add('active');
        }
        else if (!information_detail_inbox.contains(event.target)) {
            if (information_detail_inbox.classList.contains('active')) {
                information_detail_inbox.classList.remove('active');
            }
        }
    });

    const information_detail_inbox__body__turn_off_ring_inbox__switch_buttonSlider = document.querySelector('.information_detail_inbox__body__turn_off_ring_inbox__switch_button-slider');
    const information_detail_inbox__body__turn_off_ring_inbox__switch_button__input = document.querySelector('.information_detail_inbox__body__turn_off_ring_inbox__switch_button input');
    information_detail_inbox__body__turn_off_ring_inbox__switch_button__input.addEventListener('click', function(event) {
        if (information_detail_inbox__body__turn_off_ring_inbox__switch_button__input.checked) {
            
        }
    });