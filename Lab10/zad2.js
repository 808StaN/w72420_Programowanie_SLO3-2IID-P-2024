const zmianaPredkosci = 20

let samochod = {
    marka: "Toyota",
    model: "Corolla",
    rok: 2020,
    kolor: "czerwony",
    predkosc: 180,
    zmniejszPredkosc(zmianaPredkosci) {
        return this.predkosc -= zmianaPredkosci;
    },
    zwiekszPredkosc(zmianaPredkosci) {
        return this.predkosc += zmianaPredkosci;
    },
    wyswietlInformacje() {
        return `Marka: ${this.marka}, Model: ${this.model}, Rok: ${this.rok}, Kolor: ${this.kolor}, Predkosc: ${this.predkosc} km/h`;
    }
}

console.log(samochod.wyswietlInformacje());

