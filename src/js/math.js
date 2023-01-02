export default class Math {
  constructor(distance, attack, stoned) {
    this.distance = distance;
    this.attack = attack;
    this.stoned = stoned;
  }

  set attack(attack) {
    if (this.distance < 2) {
      this._attack = attack;
    } else if (this.distance > 1 && this.stoned === false) {
      this._attack = (1 - ((this.distance - 1) / 10)) * attack;
    } else {
      this.attack = ((1 - ((this.distance - 1) / 10)) * attack) - (Math.log2(this.distance) * 5);
    }
  }

  get attack() {
    return this._attack;
  }
}
