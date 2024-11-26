const url = "http://127.0.0.1:5500/copy.html?string=";

function copyText() {
  // Hent teksten fra input-feltet
  const input = document.getElementById("text");
  const text = input.value;

  // URL encode teksten
  const encodedText = encodeURIComponent(text);

  // Bruk navigator.clipboard for å kopiere teksten
  navigator.clipboard
    .writeText(url + encodedText)
    .then(() => {
      alert("The link is copied!");
    })
    .catch((err) => {
      console.error("Kunne ikke kopiere teksten: ", err);
    });
}
