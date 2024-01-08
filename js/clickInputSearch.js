export function clickInputSearch() {
    const search_input_in_page_searchPC = document.querySelector('.search_input_in_page_search-pc');
    const search_input_in_page_searchPC_svg = document.querySelector('.search_input_in_page_search-pc svg');
    const search_input_in_page_searchPC_input = document.querySelector('.search_input_in_page_search-pc input');
    const search_input_in_page_searchPC_i = document.querySelector('.search_input_in_page_search-pc i');

    const pageSearch__recently = document.querySelector('.page-search__recently');
    const pageSearch__recently__header = document.querySelector('.page-search__recently__header');

    document.addEventListener('click', function(event) {
        if (event.target !== search_input_in_page_searchPC_input) {
            blurInput();
        }
    });

    search_input_in_page_searchPC.addEventListener('click', function(event) {
        search_input_in_page_searchPC_svg.style.display = 'none';
        search_input_in_page_searchPC_input.style.paddingLeft = '0';
        search_input_in_page_searchPC_i.style.display = 'block';
        if (event.target.matches('i.fa-circle-xmark')) {
            blurInput();
            removeAllCharacter();
        }
    });

    function blurInput() {
        search_input_in_page_searchPC_svg.style.display = 'block';
        search_input_in_page_searchPC_input.style.paddingLeft = '28px';
        search_input_in_page_searchPC_i.style.display = 'none';
        search_input_in_page_searchPC_input.value = '';
    }

    search_input_in_page_searchPC_input.addEventListener('input', function() {
        changeWhenInputCharacter();
    });

    var typingTimer; // Biến để lưu trữ thời gian đợi
    function changeWhenInputCharacter() {
        clearTimeout(typingTimer); // Xóa bất kỳ độ trễ nào còn tồn tại

        pageSearch__recently.classList.add('hiddenResultInput');
        typingTimer = setTimeout(function() {
            if (search_input_in_page_searchPC_input.value.length > 0) {
                pageSearch__recently.style.marginTop = '0';
                pageSearch__recently.style.borderTop = '0';
                pageSearch__recently__header.style.display = 'none';
                pageSearch__recently.classList.remove('hiddenResultInput');
            } else {
                removeAllCharacter();
            }
        }, 500); 
    }

    function removeAllCharacter() {
        pageSearch__recently.style.marginTop = '24px';
        pageSearch__recently.style.borderTop = '1px solid var(--border-navigation_bar)';
        pageSearch__recently__header.style.display = 'flex';
        pageSearch__recently.classList.remove('hiddenResultInput');
    }


    const pageSearch__recently__body__ul__liCancels = document.querySelectorAll('.page-search__recently__body__ul__li-cancel');
    let originalBackgroundColor = getComputedStyle(pageSearch__recently__body__ul__liCancels[0].parentNode).backgroundColor;
    window.addEventListener('resize', function() {
        originalBackgroundColor = getComputedStyle(pageSearch__recently__body__ul__liCancels[0].parentNode).backgroundColor;
    })
    // Duyệt qua từng nút "Cancel" để thêm event listener
    pageSearch__recently__body__ul__liCancels.forEach(function(btn) {
        btn.addEventListener('mouseover', function() {
            btn.parentNode.style.backgroundColor = originalBackgroundColor === 'rgb(0, 0, 0)' ? 'var(--background-black)' : '#262626';
        });
        btn.addEventListener('mouseout', function() {
            btn.parentNode.style.backgroundColor = '';
        });
        btn.addEventListener('click', function() {
            //...
        });
    });
}