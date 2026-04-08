import { Animal } from "./Animal.js"; // เติมปีกกาจ๊ะ
import { Bird } from "./Bird.js";
import { Mammal } from "./Mammal.js";
import { Zoo } from "./Zoo.js";

// const Zoo = require("./Zoo");

const myZoo = new Zoo("The JS Terminal Zoo");

//create instance of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

// Add them to the zoo
myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();
