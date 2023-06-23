const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let value = Number(clickerCounter.textContent);

cookie.onclick = function () {
    value += 1;
    clickerCounter.textContent = value;
    if (cookie.width === 200) {
        cookie.width = 250;
        cookie.height = 250;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
}