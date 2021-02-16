//Part 1: 
/* Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies? */

let fs = require("fs");

let entryList = fs.readFileSync("day2text.txt", "utf8").split("\n");

function checkCharacter(str, chr, min, max) {
    let count = 0;
    for (let c of str){
        if(c == chr) {
            count++;
        }
    }
    return !(count < min || count > max);
}

let validPasswords = 0;

for (let entry of entryList) {
    let patterns = entry.split(": ");
    let password = patterns[1].split("\r")
    let validatorPattern = patterns[0].split(" ");
    let minMax = validatorPattern[0].split("-");

    // console.log(password[0])

    if(
        checkCharacter2(
            password[0],
            validatorPattern[1],
            parseInt(minMax[0])-1,
            parseInt(minMax[1])-1
        )
    ) {
        validPasswords++;
    }
}

// console.log("part 1:", validPasswords)



//PART 2

function checkCharacter2(str, chr, min, max) {
    let count = 0;
    
    if(str[min] === chr){
        count++
    }
    if(str[max] === chr){
        count++
    }
    
    return (count == 1)
}

console.log("part 2:", validPasswords)