export function appearPageMessage() {
    $('#content').load('page-in-navigation-bar/page-message.html', function() {
        const a = document.querySelector('.navigation__item-message');
        let main = document.querySelector('.main.page-message');
        if (a.classList.contains('active')) {
            main.style.display = 'flex';
            solveActive();
        }
        a.addEventListener('click', function() {
            if (!a.classList.contains('active')) {
                a.classList.add('active');
                main.style.display = 'flex';
                solveActive();
            }
        })

        function solveActive() {
            const navigation__itemSpan = document.querySelectorAll('.navigation__item-span');
            navigation__itemSpan.forEach((item) => {
                item.classList.add('active');
            });
            document.querySelector('.navigation_bar').classList.add('active');
            document.querySelector('.logo-web-tablet').classList.add('active');
            document.querySelector('.logo-web-pc').classList.add('active');
            document.querySelector('.logo-web').classList.add('active');
        }
    });
}