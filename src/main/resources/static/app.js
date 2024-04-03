// Definer variabler for referanser til HTML-elementer
var ticketForm = document.forms['ticketForm'];
var ticketList = document.getElementById('ticketList');
var deleteAllButton = document.getElementById('deleteAll');

// Start billettliste
var tickets = [];

// Legger til lytter for skjema
ticketForm.onsubmit = function(event) {
    event.preventDefault();

    // Hent verdier fra skjemaet
    var film = ticketForm.elements['film'].value;
    var quantity = ticketForm.elements['quantity'].value;
    var firstName = ticketForm.elements['firstName'].value;
    var lastName = ticketForm.elements['lastName'].value;
    var phone = ticketForm.elements['phone'].value;
    var email = ticketForm.elements['email'].value;

    // Validerer skjema
    if (!film || !quantity || !firstName || !lastName || !phone || !email) {
        alert('Alle felt må fylles ut');
        return;
    }

    // Opprett billettobjekt og legg til i billettliste
    var ticket = {
        film: film,
        quantity: quantity,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };
    tickets.push(ticket);

    // Oppdater nettsiden med den nye billetten
    renderTickets();

    // Nullstill skjemaet
    ticketForm.reset();
};

// Legg til hendelseslytter for "Slett alle billettene"-knappen
deleteAllButton.onclick = function() {
    // Tøm billettlisten
    tickets = [];

    // Oppdater nettsiden
    renderTickets();
};

// Funksjon for å oppdatere nettsiden med billettinformasjon
function renderTickets() {
    // Tøm billettlisten
    ticketList.innerHTML = '';

    // Gå gjennom alle billettene og legg til dem i billettlisten
    for (var i = 0; i < tickets.length; i++) {
        var ticketItem = document.createElement('tr');
        ticketItem.innerHTML = '<td>' + tickets[i].film + '</td><td>' + tickets[i].quantity + '</td><td>' + tickets[i].firstName + '</td><td>' + tickets[i].lastName + '</td><td>' + tickets[i].phone + '</td><td>' + tickets[i].email + '</td>';
        ticketList.appendChild(ticketItem);
    }
}