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
  }
  
  const myCar = new Car("Toyota", "Corolla", 2020, "Czarny", 0);
  
  myCar.increaseSpeed(60);
  console.log(myCar.info());
  
  myCar.decreaseSpeed(30);
  console.log(myCar.info());
  