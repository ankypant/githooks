class Animals {
  private nameOfTheAnimal: string;
  private secret = "COMPANY_SECRET";
  private secret2 = "COMPANY_SECRET";
  private secret3 = "COMPANY_SECRET";
  constructor(name: string) {
    this.nameOfTheAnimal = name;
    this.secret = null;
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
