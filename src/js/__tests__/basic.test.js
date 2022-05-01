import Daemon from '../Daemon';
import Magician from '../Magician';

test('Объкет должен атаковать', () => {
  const unit = new Daemon(true);
  unit.attack = 2;
  expect(unit.attack).toBe(85);
});

test('Объкет должен атаковать', () => {
  const unit = new Magician(true);
  unit.attack = 2;
  expect(unit.attack).toBe(85);
});

test('Объкет должен атаковать', () => {
  const unit = new Daemon(false);
  unit.attack = 2;
  expect(unit.attack).toBe(90);
});

test('Объкет должен атаковать', () => {
  const unit = new Magician(false);
  unit.attack = 2;
  expect(unit.attack).toBe(90);
});

test('Объкет не должен атаковать', () => {
  const unit = new Daemon(false);
  unit.attack = 7;
  expect(unit.attack).toBe(0);
});

test('Объкет не должен атаковать', () => {
  const unit = new Magician(false);
  unit.attack = 7;
  expect(unit.attack).toBe(0);
});
