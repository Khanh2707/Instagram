export function eventListenerInputInbox() {
const detail_inbox__footer__input_inbox__input = document.querySelector('.detail_inbox__footer__input_inbox__input input');
const detail_inbox__footer__input_inbox__icon_option__group_right = document.querySelector('.detail_inbox__footer__input_inbox__icon_option__group_right');
const detail_inbox__footer__input_inbox__button_submit = document.querySelector('.detail_inbox__footer__input_inbox__button_submit');

var valueInput = null;

detail_inbox__footer__input_inbox__input.addEventListener('input', function(event) {
    checkEmptyInput();
    valueInput = event.target.value;
});

detail_inbox__footer__input_inbox__button_submit.addEventListener('click', function() {
    console.log(valueInput);
    clearInput();
    checkEmptyInput()
});

detail_inbox__footer__input_inbox__input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && detail_inbox__footer__input_inbox__input.value.length > 0) {
        console.log(valueInput);
        clearInput();
        checkEmptyInput()
    }
});


function clearInput() {
    detail_inbox__footer__input_inbox__input.value = '';
}


function checkEmptyInput() {
    if (detail_inbox__footer__input_inbox__input.value.length > 0) {
        detail_inbox__footer__input_inbox__icon_option__group_right.style.display = 'none';
        detail_inbox__footer__input_inbox__button_submit.style.display = 'block';
    }
    else {
        detail_inbox__footer__input_inbox__icon_option__group_right.style.display = 'flex';
        detail_inbox__footer__input_inbox__button_submit.style.display = 'none';
    }
}
}