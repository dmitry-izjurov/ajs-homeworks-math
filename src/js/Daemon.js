import _Math from './Math';

export default class Daemon extends _Math {
  constructor(attack, stoned) {
    super(attack, stoned);
    this.health = 100;
    this.defence = 40;
  }
}
