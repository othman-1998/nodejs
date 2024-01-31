const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');

// readfilesync giver os adgang til teksten i filen vi specificerer i første argument. anden argument er hvilket sprog den skal bruge til det. 
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// writefilesync gør at vi kan skrive til denne fil vi sætter som første argument. hvis filen ikke er der, vil den blive oprettet og hvis den er der, så vil den blot put anden argument ind i filen eller erstatte den i forvejen eksisterende text i filen med den nye text vi sætter i anden argument. 
writeFileSync(
    './content/result-sync.txt', 
    `here is the resultttt: ${first}, ${second}`,);