const normal = require('./normal');
const quantum = require('./quantum');
const time = normal();
let arr = time.split('-');

console.log(`In real life you were absent for ${arr[0]} years, ${arr[1]} months, ${arr[2]} days.`) 
const quantumTime = quantum();

console.log(`In quantum space you were absent for ${quantumTime[0]} years,${quantumTime[1]} months,${quantumTime[2]} days.`)

