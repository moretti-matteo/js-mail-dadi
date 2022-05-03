const emailList = ["pippo@outlook.it","pluto@outlook.com","paperino@gmail.com"];
const emailListDebug = ["a", "b", "c"];

const userEmail = prompt("Inserisci la tua E-mail");

if (emailListDebug.filter(email => userEmail === email).length > 0) {
    console.log("Accesso eseguito!");
} else {
    console.log("Accesso negato, Non sei registrato!");
}

