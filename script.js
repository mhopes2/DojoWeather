console.log("page loaded...");

var cookieBox = document.querySelector(".footer");  vcXdser4q52\
}

function accept() {
    cookieBox.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var temp = document.querySelector("#temp" + i);
        var tempValue = parseInt(temp.innerText);
        if(element.value == "°C") {
            temp.innerText = f2c(tempValue);
        } else {
            temp.innerText = c2f(tempValue);
        }
    }
}
