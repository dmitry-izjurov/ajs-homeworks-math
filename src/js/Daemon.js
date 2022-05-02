import MathCharacter from './MathCharacter';

export default class Daemon extends MathCharacter {
  constructor(attack, stoned) {
    super(attack, stoned);
    this.health = 100;
    this.defence = 40;
  }
}
