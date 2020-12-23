
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
    constructor(name, alias, gender, age, powers = [], hp) {
        super(alias, powers)
        this._name = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers; 
        this.hp = hp;
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