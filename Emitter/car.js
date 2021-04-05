const  Mechanic = require('./mechanic');
const EventEmitter = require('events');
let eventname = 'crash';


class Car extends EventEmitter{
    constructor(mechanic) {
        super();
        this._currentSpeed = 0;
        this._MAXSPEED = 200;      
        this._mechanic = mechanic;  
    }
    get speed() {
        return this._currentSpeed;
    }

    set speed(value) {
        console.log(`Скорость: ${value} км/ч`);  
        if (value >= this._MAXSPEED) {
            console.log("Поломка. Причина: Превышена максимальная скорость");
            this.emit(eventname,`${this._mechanic.name}`);
        }
        this._currentSpeed = value;
              
    }
    SpeedUp(){
        console.log(`Автомобиль поехал`);  
        while(true){
            if(this.speed >= this._MAXSPEED)
                return;            
            this.speed+=20;
        }
        
    }
}

module.exports = Car;
