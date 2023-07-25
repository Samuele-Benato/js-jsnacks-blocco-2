const names = [
  "Samuele",
  "Filippo",
  "Francesco",
  "Alessio",
  "Mattia",
  "Luigi",
  "Giuseppe",
  "Nicolai",
  "Alessandro",
  "Michele",
  "Mauro",
  "Sergio",
  "Federico",
  "Damiano",
  "Simone",
  "Stefano",
  "Gianpaolo",
  "Luca",
  "Marco",
];

const surnames = [
  "Rossi",
  "Russo",
  "Ferrari",
  "Esposito",
  "Bianchi",
  "Romano",
  "Colombo",
  "Bruno",
  "Ricci",
  "Marino",
  "Costa",
  "Franco",
  "Gallo",
  "Conti",
  "Greco",
  "Mancini",
  "Lombardi",
  "Fontana",
  "Barbieri",
];

const randomList = document.getElementById("MyButton");
randomList.addEventListener("click", function () {
  let randomName = Math.floor(Math.random() * names.length);

  console.log(names[randomName]);

  let randomSurname = Math.floor(Math.random() * surnames.length);

  console.log(surnames[randomSurname]);
});
