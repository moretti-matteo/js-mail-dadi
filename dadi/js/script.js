// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numberPlayer1 = Math.floor(Math.random() * 6 + 1);
const numberCPU = Math.floor(Math.random() * 6 + 1);

if (numberPlayer1 > numberCPU) {
    console.log("player1 vincitore");

} else if (numberPlayer1 < numberCPU) {
    console.log("CPU vincitore");

} else {
    console.log("pareggio");
}

console.log(`player1 = ${numberPlayer1} - cpu = ${numberCPU}`);
