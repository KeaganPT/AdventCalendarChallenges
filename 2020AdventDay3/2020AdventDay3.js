//DAY 3 Part 1
//check how many trees you would encounter with a slope of right 3 down 1

let fs = require("fs");

let map = fs.readFileSync("day3input.txt", "utf8").split('\n')

for(let i = 0; i < map.length; i++){
    map[i] = map[i].slice(0,31)
}

function checkTreesHit(map, numRight, numDown){
    let row 
    let col = numRight
    let amountTrees = 0
    let loop = 1
    for (let i = numDown; i < map.length; i = i + numDown) {
        
        row = map[i].repeat(400)
        col = numRight * loop
        // console.log(map)
        // console.log(row[col])
        // console.log(i)
        if(row[col] === '#') {
            amountTrees++
        }
        // console.log(col)
        loop++
    }
    console.log(amountTrees)
    return amountTrees
}

// checkTreesHit(map, 3, 1)
//answer 181

//PART 2
//find what you get when you multiply the amount of trees hit from each slope with each other
/* 
    right 1, down 1
    right 3, down 1
    right 5, down 1
    right 7, down 1
    right 1, down 2
*/

let slope1 = checkTreesHit(map, 1, 1) //63
let slope2 = checkTreesHit(map, 3, 1) //181
let slope3 = checkTreesHit(map, 5, 1) //55
let slope4 = checkTreesHit(map, 7, 1) //67
let slope5 = checkTreesHit(map, 1, 2) //30

let solution = slope1 * slope2 * slope3 * slope4 * slope5

console.log(solution)