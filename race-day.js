//this assigns the race numbers randomly up to 1000
let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = true;

const runnersAge = 19;

if (runnersAge > 18 && earlyRegister === true) {
    raceNumber += 10000;
};

if (runnersAge > 18 && earlyRegister === true){
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}. `);
} else if (runnersAge > 18 && earlyRegister === false){
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}. `)
} else if (runnersAge < 18) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your race number is ${raceNumber}`);

} else if ( runnersAge === 18 || earlyRegister === true){
    console.log('Please see the registration desk')
};


