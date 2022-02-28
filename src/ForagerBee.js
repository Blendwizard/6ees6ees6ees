// Extend ForagerBee from Bee class
class ForagerBee extends Bee {
  // Create contstructor function
  constructor () {
    super(Bee);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  // Create a forage method
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
