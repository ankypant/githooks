class Animals {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}

class Dog extends Animals {
  constructor() {
    super("doggy");
  }
}

const nameOfTheAnimal = new Dog().getName();

console.log("The name of the animal is: " + nameOfTheAnimal);
