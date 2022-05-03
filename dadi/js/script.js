// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const winner = document.querySelector("#winner");
let playerName = "player1";

document.getElementById("play").addEventListener("click", function () {

    const numberPlayer1 = Math.floor(Math.random() * 6 + 1);
    const numberCPU = Math.floor(Math.random() * 6 + 1);

    playerScore.innerHTML = numberPlayer1;
    cpuScore.innerHTML = numberCPU;

    if (numberPlayer1 > numberCPU) {
        console.log("player1 vincitore");
        winner.innerHTML = `${playerName} vincitore!`;

    } else if (numberPlayer1 < numberCPU) {
        console.log("CPU vincitore");
        winner.innerHTML = "CPU vincitore";

    } else {
        console.log("pareggio");
        winner.innerHTML = "Pareggio";

    }
    console.log(`player1 = ${numberPlayer1} - cpu = ${numberCPU}`);

});


document.querySelector("#changeName").addEventListener("click", function () {
    let lastUsername = playerName;
    do {
        playerName = prompt(`User attuale: "${lastUsername}", Inserisci Nuovo Username:`);

        if (playerName === "") {
            alert("lo username non può essere vuoto, Premi annulla per annullare");
        }

    } while (playerName === "");

    if (playerName !== null) {
        winner.innerHTML = "";
        playerScore.innerHTML = 0;
        cpuScore.innerHTML = 0;
        document.querySelector("#playerName").innerHTML = playerName;
    } else {
        playerName = lastUsername;
    }
})






