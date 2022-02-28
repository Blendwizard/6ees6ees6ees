// Link HoneyMakerBee to Bee
class HoneyMakerBee extends Bee {
  // Create constructor
  constructor () {
    super(Bee);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  // Create a makeHoney method
  makeHoney () {
    this.honeyPot++;
  }
  // Create a giveHoney method
  giveHoney () {
    this.honeyPot--;
  }
};
