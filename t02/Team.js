class Team {
    constructor(id, avengers = []) {
        this.id = id;
        this.avengers = avengers;
    }
    battle(obj) {
        for (let hero in this.avengers) {
            this.avengers[hero].hp -= (parseFloat(obj.damage));
        }
    }
    calculateLosses(team) {
        let lost = 0;
        for (let hero in team.avengers) {
            if (team.avengers[hero].hp <= 0)
                lost++;
        }
        if (!lost) {
            console.log("We haven't lost anyone in this battle");
            return;
        }
        console.log(`In this battle we lost ${lost} Avengers.`);
        return;
    }
    clone() {
        let obj = {};
        Object.assign(obj, this);
        return obj;
    }
}

module.exports = {Team};

//for test.js
// const {Team} = require("./Team");
// const {Avenger} = require("./Avenger");
// const array = [];

// array[0] = new Avenger('Tony Stark', 'Iron Man', 'man', 38,['intelligence', 'durability', 'magnetism'], 120)
// array[1] = new Avenger('Natasha Romanoff', 'Black Widow', 'woman', 35,['agility', 'martial arts'], 75)
// array[2] = new Avenger('Carol Danvers', 'Captain Marvel', 'woman', 27,['durability', 'flight', 'interstellar travel'], 95)
// const team= new Team(1, array);
// console.count('Battle');
// const clonedTeam = team.clone();
// team.battle({damage: 25});
// team.calculateLosses(clonedTeam);
// console.count('Battle');
// const afterFirstBattleClone = team.clone();
// team.battle({damage: 80});
// team.calculateLosses(afterFirstBattleClone);