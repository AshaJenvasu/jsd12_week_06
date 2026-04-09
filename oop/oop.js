// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.

// The Class Template (Encapsulation)

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; //Internal state (protected by_) รับข้อมูลเข้าไปโดยไม่ต้องป้อน
  }

  makeSound() {
    console.log(`${this.name} make sound ....`);
  }

  eat() {
    this._hunger = this._hunger - 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
  render() {
    console.log(`Hi my name is ${this.name}. I'm ${this.species} desu!`);
  }

  changeName(newName) {
    const oldName = this.name;
    this.name = newName;

    console.log(`my old name is ${oldName} and my new name is ${this.name}`);
  }
}

// Object instance
const leo = new Animal("Leo", "Lion");

leo.render();
leo.changeName("Asha");
leo.render();

// specialized classes (inheritance)

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }

  render() {
    console.log(`Hi my name is ${this.name}. I'm ${this.species} desu!`);
  }
}

const Shiba = new Mammal("Shiba Inu", "Dog", "Brown");

Shiba.render();
Shiba.groom();

class Bird extends Animal {
  constructor(name, species, sound) {
    super(name, species);
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
  render() {
    console.log(
      `Hi my name is ${this.name}. I'm ${this.species} desu! And I always said ${this.sound}`,
    );
  }
}

const Rifistor = new Bird("Rifistor", "Mythisch", "เอี้ยง!");
Rifistor.render();

// playing around
/*
class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
    this._hunger = 50; //Internal state (protected by_) รับข้อมูลเข้าไปโดยไม่ต้องป้อน
  }

  _wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async sleep(seconds) {
    console.log(`${this.name} is sleeping right now.....ZZz`);

    await this._wait(seconds * 1000);

    console.log(
      `${this.name} Awake! I slept for ${seconds} seconds feel so fresh!`,
    );

    await this._wait(2000);
  }

  async makeSound() {
    console.log(`${this.name} say ${this.sound}!!!`);
    await this._wait(2000);
  }

  async eat() {
    this._hunger = this._hunger - 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
    await this._wait(2000);
  }
  async render() {
    console.log(`Hi my name is ${this.name}. I'm ${this.species} desu!`);
    await this._wait(2000);
  }
}

async function startZooLife() {
  await lion.render();
  await lion.makeSound();
  await lion.sleep(5);
  await lion.eat();

  console.log("------------------------------");

  await cat.render();
  await cat.makeSound();
  await cat.sleep(5);
}

const lion = new Animal("Simba", "Lion", "GAOOOO!!!");
const cat = new Animal("Ben", "Cat", "HUH! HuH!!!?");

startZooLife();
*/

/*const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says GAOOOOOOOOOO!!!`);
  },
};*/

/*class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  render() {
    console.log(`${this.name} costs ฿${this.price}`);
  }
}

const product1 = new Product(1, "Coffee Mug", 250);
const product2 = new Product(2, "Tea Cup", 200);

product1.render();
product2.render();*/
