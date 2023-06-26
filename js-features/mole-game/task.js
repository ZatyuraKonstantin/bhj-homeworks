getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let wings = Number(deadMole.textContent);
let losts = Number(lostMole.textContent);

function checkWin(deadMole, lostMole) {
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            deadMole.textContent = wings;
        } else {
            losts += 1;
            lostMole.textContent = losts;
        };
        checkWin(wings, losts);
    };
};