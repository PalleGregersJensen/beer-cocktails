"use strict"
console.log("Javascript kører!")

// Definerer strengen
let fullName = "Peter Heronimous Lind";

// Finder positionen af mellemnavnet og efternavnet
let firstSpace = fullName.indexOf(" ");
let lastSpace = fullName.lastIndexOf(" ");

// Udvinder fornavn, mellemnavn og efternavn fra strengen
let firstName = fullName.substring(0, firstSpace);
let middleName = fullName.substring(firstSpace+1, lastSpace);
let lastName = fullName.substring(lastSpace+1);

// Udskriver resultaterne
console.log("Fornavn: " + firstName);
console.log("Mellemnavn: " + middleName);
console.log("Efternavn: " + lastName);
