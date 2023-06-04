var actualPage = 0;
var totalPages = 5;

function movePage(reverse) {
    if(reverse == true) {
        if(actualPage > 0) {
            actualPage -= 1;
            changePageDetails()
        }
    } 
    
    else {
        if(actualPage < totalPages) {
            actualPage += 1;
            changePageDetails()
        }
    }
}

function changePageDetails() {
    console.log(actualPage)
}