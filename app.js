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
    let rodenbachName = rodebachNameToUpperCase(beers);
    let rodenbachPrice = rodenbachPriceToUppercase(beers);
    let rodenbachCountry = rodenbachCountryToUppercase(beers);
    let rodenbachFlavour = rodenbachFlavourToUppercase(beers);
  const rodenbachelements =
    /*html*/
    `<section>
      <p>Name: ${rodenbachName}</p>
      <p>Price: ${rodenbachPrice}</p>
      <p>Country: ${rodenbachCountry}</p>
      <p>Flavour: ${rodenbachFlavour}</p>

    </section>`;
  document.querySelector("#grid-container").insertAdjacentHTML("beforeend", rodenbachelements);
  console.log(rodenbachelements);
}

function rodebachNameToUpperCase(beers) {
  let nameOfRodenbach = beers.name;
  const firstLetterOfnameOfRodenbach = nameOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfnameOfRodenbach);
  let odendenbach = beers.name;
  odendenbach = odendenbach.substring(1);
  console.log(odendenbach);
  nameOfRodenbach = `${firstLetterOfnameOfRodenbach}${odendenbach}`;
  console.log(nameOfRodenbach);
  return nameOfRodenbach;
}

function rodenbachPriceToUppercase(beers) {
    let priceOfRodenbach = beers.price;
    const firstLetterOfPriceOfRodenbach = priceOfRodenbach[0].toUpperCase();
    console.log(firstLetterOfPriceOfRodenbach);
    let odendenbachPrice = beers.price;
    odendenbachPrice = odendenbachPrice.substring(1);
    console.log(odendenbachPrice);
    priceOfRodenbach = `${firstLetterOfPriceOfRodenbach}${odendenbachPrice}`;
    console.log(priceOfRodenbach);
    return priceOfRodenbach;
}

function rodenbachCountryToUppercase(beers) {
  let countryOfRodenbach = beers.country;
  const firstLetterOfCountryOfRodenbach = countryOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfCountryOfRodenbach);
  let odendenbachCountry = beers.country;
  odendenbachCountry = odendenbachCountry.substring(1);
  console.log(odendenbachCountry);
  countryOfRodenbach = `${firstLetterOfCountryOfRodenbach}${odendenbachCountry}`;
  console.log(countryOfRodenbach);
  return countryOfRodenbach;
}

function rodenbachFlavourToUppercase(beers) {
  let flavourOfRodenbach = beers.flavour;
  const firstLetterOfFlavourOfRodenbach = flavourOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfFlavourOfRodenbach);
  let odendenbachFlavour = beers.flavour;
  odendenbachFlavour = odendenbachFlavour.substring(1);
  console.log(odendenbachFlavour);
  flavourOfRodenbach = `${firstLetterOfFlavourOfRodenbach}${odendenbachFlavour}`;
  console.log(flavourOfRodenbach);
  return flavourOfRodenbach;
}