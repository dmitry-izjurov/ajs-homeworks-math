export default class MathCharacter {
  constructor() {
    this.attack = 100;
    this.stoned = false;
  }

  set attack(x) {
    this.attackNew = x;
  }

  get attack() {
    function getBaseLog(z, y) {
      return Math.log(y) / Math.log(z);
    }

    if (typeof this.attackNew === 'number' && this.attackNew > 0 && this.attackNew <= 5) {
      const result = 100 - 10 * (this.attackNew - 1);

      if (this.stoned) {
        this.attackNew = result - getBaseLog(2, this.attackNew) * 5;
        return this.attackNew;
      }
      this.attackNew = result;

      return this.attackNew;
    }
    return 0;
  }

  set stoned(x) {
    this.stonedNew = x;
  }

  get stoned() {
    return this.stonedNew;
  }
}
