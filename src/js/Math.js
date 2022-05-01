export default class _Math {
  constructor(stoned) {
    this.attack = 100;
    this.stoned = stoned;
  }

  set attack(x) {
    function getBaseLog(z, y) {
      return Math.log(y) / Math.log(z);
    }
    switch (x) {
      case 5:
        if (this.stoned) {
          this.attackNew = 60 - getBaseLog(2, x) * 5;
        } else {
          this.attackNew = 60;
        }
        break;
      case 4:
        if (this.stoned) {
          this.attackNew = 70 - getBaseLog(2, x) * 5;
        } else {
          this.attackNew = 70;
        }
        break;
      case 3:
        if (this.stoned) {
          this.attackNew = 80 - getBaseLog(2, x) * 5;
        } else {
          this.attackNew = 80;
        }
        break;
      case 2:
        if (this.stoned) {
          this.attackNew = 90 - getBaseLog(2, x) * 5;
        } else {
          this.attackNew = 90;
        }
        break;
      case 1:
        if (this.stoned) {
          this.attackNew = 95;
        } else {
          this.attackNew = 100;
        }
        break;
      default:
        this.attackNew = 0;
        break;
    }
  }

  get attack() {
    return this.attackNew;
  }
}
