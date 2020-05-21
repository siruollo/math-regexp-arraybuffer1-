import Daemon from '../Daemon';
import Magician from '../Magician';

test('простая атака Magician', () => {
  const expected = 100;
  const magician = new Magician('Magician');
  magician.distance = 1;
  const received = magician.attack;
  expect(received).toBe(expected);
});

test('Атака на расстоянии 4 клетки', () => {
  const expected = 70;
  const daemon = new Daemon('Daemon');
  daemon.distance = 4;
  const received = daemon.attack;
  expect(received).toBe(expected);
});

test('Атака с stoned  на расстоянии 2 клетки', () => {
  const expected = 85;
  const daemon = new Daemon('Daemon');
  daemon.distance = 2;
  daemon.stoned = true;
  const received = daemon.attack;
  expect(received).toBe(expected);
});
