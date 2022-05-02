import Daemon from '../Daemon';
import Magician from '../Magician';

test('Объкет должен атаковать', () => {
  const unit = new Daemon();
  unit.attack = 2;
  unit.stoned = true;
  expect(unit.attack).toBe(85);
});

test('Объкет должен атаковать', () => {
  const unit = new Magician();
  unit.attack = 2;
  unit.stoned = true;
  expect(unit.attack).toBe(85);
});

test('Объкет должен атаковать', () => {
  const unit = new Daemon();
  unit.attack = 2;
  expect(unit.attack).toBe(90);
});

test('Объкет должен атаковать', () => {
  const unit = new Magician();
  unit.attack = 2;
  expect(unit.attack).toBe(90);
});

test('Объкет не должен атаковать', () => {
  const unit = new Daemon();
  unit.attack = 7;
  expect(unit.attack).toBe(0);
});

test('Объкет не должен атаковать', () => {
  const unit = new Magician();
  unit.attack = 7;
  expect(unit.attack).toBe(0);
});
