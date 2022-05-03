const emailList = ["pippo@outlook.it","pluto@outlook.com","paperino@gmail.com"];
const emailListDebug = ["a", "b", "c"];

const userEmail = prompt("Inserisci la tua E-mail");

const verify = (emailListDebug.filter(email => userEmail === email).length > 0) ? true : false;

// if(emailListDebug.filter(email => userEmail === email).length > 0)
if (verify) {
    console.log("Accesso eseguito!");
} else {
    console.log("Accesso negato, Non sei registrato!");
}

