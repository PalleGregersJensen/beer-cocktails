"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("Javascript kører!");
  const rodenbachObject = await getData();
  console.log(rodenbachObject);
  showBeers(rodenbachObject);
  showRodenbach(rodenbachObject);
}

async function getData() {
  const response = await fetch("beer-cocktails.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showBeers(rodenbachObject) {
  let rodenbachText = "";
  for (let x in rodenbachObject) {
    rodenbachText += rodenbachObject[x] + " ";
  }
  console.log(rodenbachObject);
  console.log(rodenbachText);
  // return rodenbach;
  document.querySelector("#name").textContent = `Name: ${rodenbachObject.name}`;
  document.querySelector("#country").textContent = `Country ${rodenbachObject.country}`;
  document.querySelector("#price").textContent = `Price: ${rodenbachObject.price}`;
  document.querySelector("#flavour").textContent = `Flavour: ${rodenbachObject.flavour}`;

  return rodenbachObject;
}

function showRodenbach(beerObject) {
    let rodenbachName = rodebachNameToUpperCase(beerObject);
    let rodenbachPrice = rodenbachPriceToUppercase(beerObject);
    let rodenbachCountry = rodenbachCountryToUppercase(beerObject);
    let rodenbachFlavour = rodenbachFlavourToUppercase(beerObject);
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

function rodebachNameToUpperCase(beerObject) {
  let nameOfRodenbach = beerObject.name;
  const firstLetterOfnameOfRodenbach = nameOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfnameOfRodenbach);
  let odendenbach = beerObject.name;
  odendenbach = odendenbach.substring(1);
  console.log(odendenbach);
  nameOfRodenbach = `${firstLetterOfnameOfRodenbach}${odendenbach}`;
  console.log(nameOfRodenbach);
  return nameOfRodenbach;
}

function rodenbachPriceToUppercase(beerObject) {
    let priceOfRodenbach = beerObject.price;
    const firstLetterOfPriceOfRodenbach = priceOfRodenbach[0].toUpperCase();
    console.log(firstLetterOfPriceOfRodenbach);
    let odendenbachPrice = beerObject.price;
    odendenbachPrice = odendenbachPrice.substring(1);
    console.log(odendenbachPrice);
    priceOfRodenbach = `${firstLetterOfPriceOfRodenbach}${odendenbachPrice}`;
    console.log(priceOfRodenbach);
    return priceOfRodenbach;
}

function rodenbachCountryToUppercase(beerObject) {
  let countryOfRodenbach = beerObject.country;
  const firstLetterOfCountryOfRodenbach = countryOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfCountryOfRodenbach);
  let odendenbachCountry = beerObject.country;
  odendenbachCountry = odendenbachCountry.substring(1);
  console.log(odendenbachCountry);
  countryOfRodenbach = `${firstLetterOfCountryOfRodenbach}${odendenbachCountry}`;
  console.log(countryOfRodenbach);
  return countryOfRodenbach;
}

function rodenbachFlavourToUppercase(beerObject) {
  let flavourOfRodenbach = beerObject.flavour;
  const firstLetterOfFlavourOfRodenbach = flavourOfRodenbach[0].toUpperCase();
  console.log(firstLetterOfFlavourOfRodenbach);
  let odendenbachFlavour = beerObject.flavour;
  odendenbachFlavour = odendenbachFlavour.substring(1);
  console.log(odendenbachFlavour);
  flavourOfRodenbach = `${firstLetterOfFlavourOfRodenbach}${odendenbachFlavour}`;
  console.log(flavourOfRodenbach);
  return flavourOfRodenbach;
}