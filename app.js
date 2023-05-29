"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("Javascript kører!");
  const beers = await getData();
  console.log(beers);
    showBeers(beers);
    showRodenbach(beers);
}

async function getData() {
  const response = await fetch("beer-cocktails.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showBeers(beers) {
    let rodenbach = "";
    for (let x in beers) {
        rodenbach += beers[x] + " ";
    }
    console.log(beers);
    console.log(rodenbach);
    // return rodenbach;
    document.querySelector("#name").textContent = `Name: ${beers.name}`;
    document.querySelector("#country").textContent = `Country ${beers.country}`;
    document.querySelector("#price").textContent = `Price: ${beers.price}`;
    document.querySelector("#flavour").textContent = `Flavour: ${beers.flavour}`;
    return beers;
}

function showRodenbach(beers) {
  const rodenbachelements =
    /*html*/
    `<section>
      <p>Name: ${beers.name}</p>
      <p>Price: ${beers.price}</p>
      <p>Country: ${beers.country}</p>
      <p>Flavour: ${beers.flavour}</p>

    </section>`;
  document.querySelector("#grid-container").insertAdjacentHTML("beforeend", rodenbachelements);
  console.log(rodenbachelements);
}
