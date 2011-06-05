var displayField;

$(document).ready(function() {
    displayField = $('#display')
    $("button").bind('tap', function() {
        buttonPressed()
    })
})

function buttonPressed() {
    var buttonText = event.target.innerText

    if (isCompute(buttonText)) {
        compute()
    } else if (isClear(buttonText)) {
        clear()
    } else if (isBackSpace(buttonText)) {
        backSpace()
    } else {
        display(buttonText)
    }
}

function isClear(buttonText) {
    return "C" == buttonText
}

function isBackSpace(buttonText) {
    return "\u21D0" == buttonText
}

function isCompute(buttonText) {
    return "=" == buttonText
}

function display(buttonText) {
    var newDisplay = displayField.val() + buttonText
    displayField.val(newDisplay)
}

function clear() {
    displayField.val("")
}

function backSpace() {
    var display = displayField.val()

    if (display.length > 0) {
        var newDisplay = display.substr(0, display.length - 1)
        displayField.val(newDisplay)
    }
}

function compute() {
    try {
        var newDisplay = eval(displayField.val())
        displayField.val(newDisplay)
    } catch (error) {
        displayField.val("Error")
    }
}