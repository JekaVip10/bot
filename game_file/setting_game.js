var time = new Date();

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    return `${this.name} бежит со скоростью ${this.speed} метров.`;
  }
  stop() {
    this.speed = 0;
    return `${this.name} стоит.`;
  }
}

class Car {
	constructor() {
		this.name;
	}
	buy(name) {
		this.name = name;
		return `У вас куплен ${this.name}`
	}
}

// Наследуем от Animal указывая "extends Animal"
class Rabbit extends Animal {
  hide() {
    return `${this.name} прячется от волка!`;
  }
}

exports.Car = Car;
exports.Rabbit = Rabbit;
exports.Animal = Animal;
