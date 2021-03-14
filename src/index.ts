class Animals {
  private nameOfTheAnimal: string;
  constructor(name: string) {
    this.nameOfTheAnimal = name;
  }

  public getName(): string {
    return this.nameOfTheAnimal;
  }

  public setName(name: string): void {
    this.nameOfTheAnimal = name;
  }
}

class Dog extends Animals {
  constructor() {
    super("doggy");
  }
}

const dog = new Dog();

console.log("The name of the animal is:" + dog.getName());
