import { checkNavigationActive } from './checkNavigationActive.js';
import { appearModalCreateContent } from './appearModalCreateContent.js';

$(document).ready(function() {
    const load_html = new Promise((resolve, reject) => {
        $('#direct_html').load('navigationBar.html', function() {
            resolve();
        });
    });

    load_html
        .then(() => {
            checkNavigationActive();
            appearModalCreateContent();
        });
});
