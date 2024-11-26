let urlParams = new URLSearchParams(window.location.search);
let stringVerdi = urlParams.get("string"); // Henter verdien av 'string'

// Hvis parameteren 'string' finnes, kopier den til utklippstavlen
if (stringVerdi) {
  navigator.clipboard
    .writeText(stringVerdi)
    .then(function () {
      alert("Tekst kopiert til utklippstavlen: " + stringVerdi);
    })
    .catch(function (error) {
      alert("Noe gikk galt: " + error);
    });
} else {
  alert("Parameteren 'string' finnes ikke i URL-en.");
}
