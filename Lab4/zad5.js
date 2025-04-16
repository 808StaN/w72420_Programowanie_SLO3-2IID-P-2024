const prostokat = {
    szerokosc: 10,
    wysokosc: 15,
    pole() {
      return this.szerokosc * this.wysokosc;
    },
    obwod() {
      return 2 * (this.szerokosc + this.wysokosc);
    },
    czyKwadrat() {
      return this.szerokosc === this.wysokosc;
    }
  };
  
  console.log(`Pole prostokąta: ${prostokat.pole()}`); 
  console.log(`Obwód prostokąta: ${prostokat.obwod()}`); 
  console.log(`Czy prostokąt jest kwadratem? ${prostokat.czyKwadrat() ? "Tak" : "Nie"}`);
  