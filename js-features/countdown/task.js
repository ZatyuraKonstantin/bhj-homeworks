const endTimer = setInterval(function() {
    const time = document.getElementById("timer");
    
    if (time.textContent > 0) {
        time.textContent -= 1;
    } else {
        alert ("Вы победили в конкурсе!");
        clearInterval(endTimer);
    }
}, 1000)
