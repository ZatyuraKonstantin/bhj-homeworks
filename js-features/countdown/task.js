const endTimer = function() {
    const time = document.getElementById("timer");
    
    if (time.textContent > 0) {
        time.textContent -= 1;
    } else {
        alert ("Вы победили в конкурсе!");
        time.textContent = 59;
    }
};

setInterval(endTimer, 1000)