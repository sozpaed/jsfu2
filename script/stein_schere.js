let c = 1;
let p = 0;
let k = 0;

while (c <= 3) {
    let z = Math.floor(Math.random() * 3) + 1;
    let n = parseInt(prompt('Wähle Stein (1), Schere (2), Papier (3): '), 10);

    if (z == n) {
        alert('Unentschieden ' + p + "/" + k);
    } else if (z == 1) {
        if (n == 2) {
            getVerloren();
        } else {
            getGewonnen();
        }
    } else if (z == 2) {
        if (n == 3) {
            getVerloren();
        } else {
            getGewonnen();
        }
    } else if (z == 3) {
        if (n == 1) {
            getVerloren();
        } else {
            getGewonnen();
        }
    }

    c++;
}

function getGewonnen() {
    p += 1;
    alert('Gewonnen ' + p + "/" + k);
}

function getVerloren() {
    k += 1;
    alert('Verloren ' + p + "/" + k);
}