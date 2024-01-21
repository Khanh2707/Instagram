import { checkNavigationActive } from './checkNavigationActive.js';
import { appearModalCreateContent } from './appearModalCreateContent.js';

$(document).ready(function() {
    // Load navigationBar.html
    const loadNavigation = new Promise((resolve, reject) => {
        $('#direct_html').load('navigationBar.html', function() {
            resolve();
        });
    });

    // Load modalCreateContent.html
    const loadModalContent = new Promise((resolve, reject) => {
        $('body').append('<div id="modal"></div>');
        $('#modal').load('modal/modal.html', function() {
            resolve();
        });
    });

    // Sau khi cả hai tệp HTML được load
    Promise.all([loadNavigation, loadModalContent]).then(() => {
        // Gọi hàm kiểm tra navigation active
        checkNavigationActive();

        // Gọi hàm xuất hiện modal tạo nội dung
        appearModalCreateContent();
    });
});
