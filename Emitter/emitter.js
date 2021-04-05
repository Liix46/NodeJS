debugger;
const  Car = require('./car');
const  Mechanic = require('./mechanic');

let mechanic = new Mechanic("Чип и Дэйл");
let eventname = 'crash';
let car = new Car(mechanic);
car.on(eventname, mechanic.Go);
car.SpeedUp();



