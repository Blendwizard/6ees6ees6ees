// Extend RetiredForagerBee from Forager Bee
class RetiredForagerBee extends ForagerBee {
  // Create constructor
  constructor () {
    super(ForagerBee);
    this.age = 40;
    this.color = 'grey';
    this.job = 'gamble';
    this.canFly = false;
  }
  // Create new forage method
  forage() {
    return 'I am too old, let me play cards instead';
  }
  // Create a new always-winning gamble method
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
