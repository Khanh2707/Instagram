export function appearPageMessage() {
    const a = document.querySelector('.navigation__item-message');
    $(document).ready(function() {
        if (a.classList.contains('active')) {
            $('#content').load('../page-message.html');
            solveActive();
        }
        a.addEventListener('click', function() {
            if (!a.classList.contains('active')) {
                a.classList.add('active');
                $('#content').load('../page-message.html');
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