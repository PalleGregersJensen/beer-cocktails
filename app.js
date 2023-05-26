"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("Javascript kører!");
  const beers = await getData();
  console.log(beers);
  showBeers(beers);
}

async function getData() {
  const response = await fetch("beer-cocktails.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showBeers(beers) {
  let txt = "";
  for (let x in beers) {
    txt += beers[x] + " ";
  }
    console.log(txt);
    
}
