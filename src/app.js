/* eslint-disable */
/*Angel Rausseo */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let random = Math.floor(Math.random() * 13);
  let mazo = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let roll = Math.floor(Math.random() * 4);
  let pintas = [
    { type: "spade", figure: "♠" },
    { type: "club", figure: "♣" },
    { type: "heart", figure: "♥" },
    { type: "diamond", figure: "♦" }
  ];

  // let pintas = ["spade", "club", "heart", "diamond"];
  let card = document.querySelector(".card");

  card.classList.add(pintas[roll].type);
  let arriba = document.createElement("p");
  arriba.setAttribute("class", "position-absolute top-0 start-0 mx-3 my-1");
  arriba.style.color =
    pintas[roll].type === "heart" || pintas[roll].type === "diamond"
      ? "red"
      : "black";
  arriba.textContent = pintas[roll].figure;
  card.appendChild(arriba);
  let numero = document.createElement("p");
  numero.classList.add("numero");
  numero.textContent = mazo[random];
  card.appendChild(numero);
  let abajo = document.createElement("p");
  abajo.setAttribute("class", "position-absolute bottom-0 end-0 mx-3 my-1");
  abajo.style.color =
    pintas[roll].type === "heart" || pintas[roll].type === "diamond"
      ? "red"
      : "black";
  abajo.textContent = pintas[roll].figure;
  card.appendChild(abajo);
};
