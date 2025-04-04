let z = Math.floor(Math.random() * 20) + 1;
let g = false;
let c = 0;

while (!g) {
    let n = prompt('Gebe die Zahl an: ');
    c++;
    if (z == n) {
        alert('geschafft ' + c);
        g = true;
    } else if (n < z) {
        alert('zu klein ' + c);
    } else if (n > z) {
        alert('zu groß ' + c);
    }
}