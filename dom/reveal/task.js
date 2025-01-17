
const block = document.getElementsByClassName('reveal');

let isInViewPort = function(element) {
    const viewPortHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementBottom < 0 || elementTop > viewPortHeight) {
        return false;
    } else {
        return true;
    }
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < block.length; i++) {
        if ( isInViewPort(block[i]) === true ) {
            block[i].classList.add('reveal_active');
        } else {
            block[i].classList.remove('reveal_active');
        }
    }
});