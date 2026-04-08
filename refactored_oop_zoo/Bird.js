import { Animal } from "./Animal.js";

export class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species);
    this.wingspan = wingspan;
  }

  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}
