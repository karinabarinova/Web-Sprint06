
class ClassFunc extends Function {
    constructor(alias, powers) {
        super('', 'return this.__call__()');
        this.alias = alias;
        this.powers = powers;
        return this.bind(this);
    }
    __call__() {
        return `${this.alias}\n${this.powers}`;
    }
}


class Avenger extends ClassFunc{
    constructor(args) {
        super(args.alias, args.powers)
        this._name = args.name;
        this.alias = args.alias;
        this.gender = args.gender;
        this.age = args.age;
        this.powers = args.powers; 
    }
    __call__() {
        let str = "";
        for (let item in this) {
            if (item !== "_name" && item !== "gender" && item != "age")
            str += `${this[item]}\n`;
        }
            
        return str;
    }
    toString() {
        let str = "";
        for (let item in this) {
            if (item != "alias" && item != "powers") {
                str += `${item}: ${this[item]}\n`;
            }   
        }
        return str;
    }
}

module.exports = {Avenger};

// For test.js
// const{Avenger} = require("./Avenger");
// const stark = new Avenger(
//     {name: 'Tony Stark',
//     alias: 'Iron Man',
//     gender: 'man',
//     age: 38,
//     powers: ["intelligence", "durability", "magnetism"]  
// });
// const natasha = new Avenger({
//     name: 'Natasha Romanoff',
//     alias: 'Black Widow',
//     gender: 'woman',
//     age: 35,
//     powers: ["agility", "martial arts"]
// })

// const examine = (avenger) => {
//     console.count('Avenger');
//     console.group('*** Avenger introduced ***');
//     console.log(avenger.toString());
//     console.groupEnd();
//     console.group('*** Avenger called ***');
//     console.log(avenger());
//     console.groupEnd();
//     console.group('*** Avenger\'s internals ***');
//     console.log(avenger, '\n');
//     console.groupEnd();
// }
// examine(stark);
// examine(natasha);

