// Building a virtual Zoo
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; //Internal state (protected by_) รับข้อมูลเข้าไปโดยไม่ต้องป้อน
  }

  getStatus() {
    if (this._hunger <= 0) return "Full";
    if (this._hunger <= 20) return "Satisfied";
    return "Hungry";
  }

  makeSound() {
    console.log(`${this.name} make sound ....`);
  }

  eat() {
    // this._hunger = this._hunger - 10;
    // console.log(
    //   `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    // );
    if (this._hunger <= 0) {
      console.log(`${this.name} is already full!`);
    } else {
      console.log(`${this.name} ate. Hunger is now ${this._hunger}`);
    }
  }
  render() {
    console.log(`Hi my name is ${this.name}. I'm ${this.species} desu!`);
  }
}

// Example of inheritance
// Bird and Mammal gets everything from Animal via 'extends'

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }

  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

//Zoo Manager
//A class to hold and run our animal objects

class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}`);
  }

  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    this.animals.forEach((animal) => {
      console.log("Here ->", animal);
      console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
      // Accessing properties and calling methods
      console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
      animal.makeSound();
      animal.eat();
      console.log("-------------------");
    });
  }
}

//Execution

const myZoo = new Zoo("The JS Terminal Zoo");

//create instance of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();
