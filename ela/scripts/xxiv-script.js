var actualArea = 1
var actualText = 1
var totalTexts = 102

$(document).ready(function(){
    const arrowUp   = $("#arrow-change-area-up")
    const arrowDown = $("#arrow-change-area-down")

    const area2 = $("#area-2")
    const area1 = $("#area-1")

    arrowDown.click(function() {
        if(actualArea === 1) {
            actualArea = 2;
        }

        verifyActualArea(arrowDown, arrowUp, area1, area2)
    })

    arrowUp.click(function() {
        if(actualArea === 2) {
            actualArea = 1;
        }

        verifyActualArea(arrowDown, arrowUp, area1, area2)
    })

    const thingsNext = $("#things-inputs #next")
    const thingsPrevious = $("#things-inputs #previous")

    thingsNext.click(function() {
        if(actualText < totalTexts) {
            actualText = actualText + 1
            actualizePageTexts(actualText, 1)
        }
    })

    thingsPrevious.click(function() {
        if(actualText > 1) {
            actualText = actualText - 1
            actualizePageTexts(actualText, -1)
        }
    })

  });

function verifyActualArea(arrowDown, arrowUp, area1, area2, area3) {
    if(actualArea === 1) {
        arrowUp.css("display", "none")
        arrowDown.css("display", "block")

        area1.addClass("area-content-actual")
        area2.removeClass("area-content-actual")
    } else if(actualArea === 2) {
        arrowUp.css("display", "block")
        arrowDown.css("display", "none")
        
        area2.addClass("area-content-actual")
    } 
}

function actualizePageTexts(actualText, direcao) {
    //console.log(actualText, textsList, 'oie')

    if(direcao === 1) {
        const previous = $(`#text-${actualText-1}`)
        previous.addClass('ocult')
    }

    const actual = $(`#text-${actualText}`)
    actual.removeClass('ocult')

    if(direcao === -1) {
        const next = $(`#text-${actualText+1}`)
        next.addClass('ocult')
    }
}