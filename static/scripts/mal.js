/*
function displayList(id) {
    const actual = $("#" + id)
    const others = $(".list-suspense")

    for(let i = 0; i < others.length; i++) {
        const toRemove = $("#" + others[i].id)
        toRemove.removeClass("display")
    }

    actual.addClass("display")
    console.log(actual)
}
*/
function topFunction() {
    document.getElementById("content").scrollTop = 0;
}


$(window).load(function() {
    let btn = document.getElementById("to-top");
    window.onscroll = function() {displayTopBtn()};

    function displayTopBtn() {
        if (document.getElementById("content").scrollTop >  20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
})