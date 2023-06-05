var actualPage = 0;
var totalPages = 2;

function movePage(reverse) {
    if(reverse == true) {
        if(actualPage > 0) {
            actualPage -= 1;
            changePageDetails();
        }
    } 
    
    else {
        if(actualPage < totalPages) {
            actualPage += 1;
            changePageDetails();
        }
    }
}

function changePageDetails() {
    let pages = $(".ifo-div");
    console.log(pages)
    for(let i = 0; i <= totalPages; i++) {
        pages[i].classList.add('occult');
    }
    pages[actualPage].classList.remove('occult')
}

function showMenu() {
    let menu = $("#menu");
    if(menu.hasClass("occulted")) {
        menu.removeClass("occulted");
    }
    else {
        menu.addClass("occulted");
    }
}