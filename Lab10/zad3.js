let samochody = [
    {Toypta: "Corolla", model: "2020", kolor: "czerwony", predkosc: 180},
    {Ford: "Focus", model: "2019", kolor: "niebieski", predkosc: 200},
    {BMW: "320i", model: "2021", kolor: "czarny", predkosc: 240},
    {Audi: "A4", model: "2018", kolor: "srebrny", predkosc: 220},
]

let sredniaPredkosc = samochody.reduce((suma, samochod) => suma + samochod.predkosc, 0) / samochody.length;
console.log(`Średnia prędkość samochodów: ${sredniaPredkosc} km/h`);

let wybranyRok = 2021;
let samochodyPo2020 = samochody.filter(samochod => parseInt(samochod.model) > wybranyRok);
console.log(`Samochody z roku po ${wybranyRok}:`);