class Animals {
  private secret = "COMPANY_SECRET";

  constructor(private name: string) {
    this.name = name;
    this.secret = null;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

class Dog extends Animals {
  constructor() {
    super("doggy");
  }
}

const dog = new Dog();

console.log("The name of the animal is:" + dog.getName());
