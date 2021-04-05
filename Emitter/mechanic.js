class Mechanic {
    constructor(name) {
        this._name = name;      
    }
    get name(){
        return this._name;
    }
    Go(data){
        console.log(`${data}: Выезжаем!`);
    }
}

module.exports = Mechanic;
