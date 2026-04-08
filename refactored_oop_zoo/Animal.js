export class Animal {
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
