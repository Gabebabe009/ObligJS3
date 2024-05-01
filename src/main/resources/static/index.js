let tickets = [];  //Her endres  arrayet fra buyTicket til å være globalt tilgjengelig slik at vi kan bruke det senere i deleteTickets

function buyTickets() {

    let chosenMovie = document.getElementById("movies").value;
    let wrongNumber = document.getElementById("number").value;
    let chosenFirstName = document.getElementById("firstname").value;
    let chosenLastName = document.getElementById("lastname").value;
    let chosenPhoneNr = document.getElementById("phonenr").value;
    let chosenEmail = document.getElementById("mail").value;

    const ticket1 = {  //Oppretter et objekt og legger inn de opprettede variablene.
        movies: chosenMovie,
        number: wrongNumber,
        firstname: chosenFirstName,
        lastname: chosenLastName,
        phonenr: chosenPhoneNr,
        mail: chosenEmail
    };

    let isValid = true;

    // Validation for number of tickets
    if (wrongNumber === "" || isNaN(wrongNumber) || wrongNumber < 1) {
        document.getElementById("wrongNumber").innerHTML = "You have to write in an amount from 1-->";
        isValid = false;
        document.getElementById("number").value = "";
    } else {
        document.getElementById("wrongNumber").innerHTML = "";
    }

    // Validation for first name
    if (chosenFirstName === "") {
        document.getElementById("wrongFristName").innerHTML = "Write in a first name";
        isValid = false;
        document.getElementById("firstname").value = "";
    } else {
        document.getElementById("wrongFristName").innerHTML = "";
    }

    // Validation for last name
    if (chosenLastName === "") {
        document.getElementById("wrongLastName").innerHTML = "Write in a last name";
        isValid = false;
        document.getElementById("lastname").value = "";
    } else {
        document.getElementById("wrongLastName").innerHTML = "";
    }

    // Validation for phone number (8 digits)
    if (chosenPhoneNr === "" || !/^\d{8}$/.test(chosenPhoneNr)) {
        document.getElementById("wrongPhoneNr").innerHTML = "Phone number must contain 8 digits";
        isValid = false;
        document.getElementById("phonenr").value = "";
    } else {
        document.getElementById("wrongPhoneNr").innerHTML = "";
    }

    // Validation for email (must contain '@')
    if (chosenEmail === "" || !chosenEmail.includes('@')) {
        document.getElementById("wrongMail").innerHTML = "Enter a valid email address";
        isValid = false;
        document.getElementById("mail").value = "";
    } else {
        document.getElementById("wrongMail").innerHTML = "";
    }

    if (isValid) {
        console.log(tickets);
        $.post("/save", ticket1, function(data){
            getAll();
            document.getElementById("data").value = "";
        });
    }
}
function printOut(tickets) { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
    let ut = "";
    for (let i = 0; i < tickets.length; i++) {
        ut += tickets[i].movies + " " + tickets[i].number + " " + tickets[i].firstname
            + " " + tickets[i].lastname + " " + tickets[i].phonenr +
            " " + tickets[i].mail;
    }
    document.getElementById("utskrift").innerHTML = ut;
    console.log(ut);
}

function getAll() {
    $.get("/getAll", function(data){
        printOut(data)
    });
}
function deleteTickets(){
    if(document.getElementById("utskrift").innerHTML !==""){
        $.get("/deleteAll", function(){
            document.getElementById("utskrift").innerHTML="";
        });
    }
}
