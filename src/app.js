/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let random = Math.floor(Math.random() * 13);
  let mazo = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let roll = Math.floor(Math.random() * 4);
  let pintas = ["spade", "club", "heart", "diamond"];

  let createCard = document.querySelector(".card");
  if (pintas[roll] === "spade") {
      createCard.classList.add("spade");
      let carta1 = document.createElement("p");
      carta1 = 
      let carta2 = document.createElement("p");
      //♦ ♥ ♠ ♣
  }
  let numero = document.querySelector(".numero");
  numero.textContent = mazo[random];
};
