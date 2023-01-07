export default class MathAttack {
  constructor(distance, attack, stoned) {
    this.distance = distance;
    this.stoned = stoned;
    this.attack = attack;
  }

  set attack(attack) {
    if (this.distance < 2) {
      this._attack = attack; // eslint-disable-line
    }
    if (this.distance > 1 && !this.stoned) {
      this._attack = (1 - ((this.distance - 1) / 10)) * attack; // eslint-disable-line
    }
    if (this.distance > 1 && this.stoned) {
      this._attack = ((1 - ((this.distance - 1) / 10)) * attack) - (Math.log2(this.distance) * 5); // eslint-disable-line
    }
  }

  get attack() {
    return this._attack; // eslint-disable-line
  }
}
