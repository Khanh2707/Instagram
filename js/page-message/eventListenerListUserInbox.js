const list_inbox__content__ul__li = document.querySelectorAll('.list_inbox__content__ul__li');

list_inbox__content__ul__li.forEach((item) => {
    let not_select_inbox = document.querySelector('.not_select_inbox');
    let detail_inbox = document.querySelector('.detail_inbox');

    let inbox_has_been_no_read = item.querySelector('.list_inbox__content__ul__li-inbox_has_been_no_read');
    let icon_notification_new_message = item.querySelector('.list_inbox__content__ul__li-icon_notification_new_message');
    if (inbox_has_been_no_read) {
        icon_notification_new_message.classList.add('active');
    }
    item.addEventListener('click', function() {
        list_inbox__content__ul__li.forEach((childItem) => {
            if (childItem.classList.contains('active')) {
                childItem.classList.remove('active');
            }
        })
        
        if (inbox_has_been_no_read) {
            inbox_has_been_no_read.classList.remove('list_inbox__content__ul__li-inbox_has_been_no_read');
            inbox_has_been_no_read.classList.add('list_inbox__content__ul__li-inbox_has_been_read');
            icon_notification_new_message.classList.remove('active');
        }
        item.classList.add('active');
        not_select_inbox.style.display = 'none';
        detail_inbox.classList.add('active');
    });
});