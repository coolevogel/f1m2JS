const cat1 = {
    naam: "Kitty",
    geslacht: "V",
    leeftijd: 1,
    afbeelding: "https://placekitten.com/400/300",
}
const cat2 = {
    naam: "Boris",
    geslacht: "M",
    leeftijd: 2,
    afbeelding: "https://placekitten.com/401/300",
}
const cat3 = {
    naam: "Dexter",
    geslacht: "M",
    leeftijd: 7,
    afbeelding: "https://placekitten.com/402/300",
}
const cat4 = {
    naam: "Neeltje",
    geslacht: "V",
    leeftijd: 6,
    afbeelding: "https://placekitten.com/403/300",
}

console.log(cat1.naam);
console.log(cat1.leeftijd);
console.log(cat1.geslacht);

console.log(cat2.naam);
console.log(cat2.leeftijd);
console.log(cat2.geslacht);

console.log(cat3.naam);
console.log(cat3.leeftijd);
console.log(cat3.geslacht);

console.log(cat4.naam);
console.log(cat4.leeftijd);
console.log(cat4.geslacht);

const img = document.getElementById("myimg");
img.src = cat1.afbeelding