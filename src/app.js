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
    carta1.setAttribute("class", "position-absolute top-0 start-0 mx-3 my-1");
    carta1.textContent = "♠";
    createCard.appendChild(carta1);
    let carta2 = document.createElement("p");
    carta2.setAttribute("class", "position-absolute bottom-0 end-0 mx-3 my-1");
    carta2.textContent = "♠";
    createCard.appendChild(carta2);
    //♦ ♥ ♠ ♣
  }
  if (pintas[roll] === "club") {
    createCard.classList.add("club");
    let carta1 = document.createElement("p");
    carta1.setAttribute("class", "position-absolute top-0 start-0 mx-3 my-1");
    carta1.textContent = "♣";
    createCard.appendChild(carta1);
    let carta2 = document.createElement("p");
    carta2.setAttribute("class", "position-absolute bottom-0 end-0 mx-3 my-1");
    carta2.textContent = "♣";
    createCard.appendChild(carta2);
  }
  if (pintas[roll] === "heart") {
    createCard.classList.add("heart");
    let carta1 = document.createElement("p");
    carta1.setAttribute("class", "position-absolute top-0 start-0 mx-3 my-1");
    carta1.textContent = "♥";
    carta1.style.color = "red";
    createCard.appendChild(carta1);
    let carta2 = document.createElement("p");
    carta2.setAttribute("class", "position-absolute bottom-0 end-0 mx-3 my-1");
    carta2.textContent = "♥";
    carta2.style.color = "red";
    createCard.appendChild(carta2);
  }
  if (pintas[roll] === "diamond") {
    createCard.classList.add("diamond");
    let carta1 = document.createElement("p");
    carta1.setAttribute("class", "position-absolute top-0 start-0 mx-3 my-1");
    carta1.textContent = "♦";
    createCard.appendChild(carta1);
    let carta2 = document.createElement("p");
    carta2.setAttribute("class", "position-absolute bottom-0 end-0 mx-3 my-1");
    carta2.textContent = "♦";
    createCard.appendChild(carta2);
  }

  //♦ ♥ ♠ ♣
  let numero = document.querySelector(".numero");
  numero.textContent = mazo[random];
};
