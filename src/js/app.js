/* eslint-disable no-console */
// TODO: write code here
import MPWP from './MPWP';
import Daemon from './Daemon';
import Magician from './Magician';

const Yoda = new MPWP({ name: 'Master Yoda', health: 999, level: 999 });
const Obi1 = new Magician({ name: 'Obi 1 Kenobi', health: 999, level: 999 });
const DarthWader = new Daemon({ name: 'Anakin Skywalker', health: 999, level: 999 });

console.log(Yoda.curProps());
console.log(Obi1.curProps());
console.log(DarthWader.curProps());
console.log(`${Obi1.name}: range = 5`);
Obi1.range = 5;
console.log(Obi1.curProps());

console.log(`${DarthWader.name}: stoned = 1, range = 5`);
DarthWader.range = 5;
DarthWader.stoned = 5;
console.log(DarthWader.curProps());

console.log(`${DarthWader.name}: stoned = 0, range = 5`);
DarthWader.range = 5;
DarthWader.stoned = 0;
console.log(DarthWader.curProps());
