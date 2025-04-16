function Car(mark, model, year, color, speed) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = speed;
  
    this.increaseSpeed = function(value) {
      this.speed += value;
    };
  
    this.decreaseSpeed = function(value) {
      this.speed = Math.max(0, this.speed - value);
    };
  
    this.info = function() {
      return `${this.mark} ${this.model} (${this.year}), Kolor: ${this.color}, Prędkość: ${this.speed} km/h`;
    };
  
    this.getAge = function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    };
  }
  
  const myCar = new Car("Toyota", "Corolla", 2015, "Czarny", 0);
  
  console.log(myCar.info()); 
  console.log(`Wiek samochodu: ${myCar.getAge()} lat`);
  