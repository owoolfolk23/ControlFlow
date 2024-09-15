const pi = 3.1415;
let radius = 5;
let area = pi * radius * radius;
let weeks = 1;
const space = 0.8;
const plantRate = 2;
let plantCount = 20
let plantArea = space * plantCount * (Math.pow(plantRate, weeks));

//* Part 1, Week 1 plant area testing *//
console.group("Week 1")
if(plantArea > area * 0.8){
    console.log("Pruned - exceeding the capacity of the garden")
    console.log("plantArea is: "+plantArea)
}
else if(plantArea > area * 0.5){
    console.log("Monitored - growing at an acceptable rate.")
    console.log("plantArea is: "+plantArea)
}
else{
    console.log("Planted - room to plant more plants")
    console.log("plantArea is: "+plantArea)
}
console.groupEnd();

//* Week 2 plant area testing *//
console.group("Week 2")
weeks++
plantArea = space * 20 * (Math.pow(plantRate, weeks))
if(plantArea > area * 0.8){
    console.log("Pruned - exceeding the capacity of the garden")
    console.log("plantArea is: "+plantArea)
}
else if(plantArea > area * 0.5){
    console.log("Monitored - growing at an acceptable rate.")
    console.log("plantArea is: "+plantArea)
}
else{
    console.log("Planted - room to plant more plants")
    console.log("plantArea is: "+plantArea)
}
console.groupEnd();

//* Week 3 plant area testing *//
console.group("Week 3")
weeks++
plantArea = space * 20 * (Math.pow(plantRate, weeks))
if(plantArea > area * 0.8){
    console.log("Pruned - exceeding the capacity of the garden")
    console.log("plantArea is: "+plantArea)
}
else if(plantArea > area * 0.5){
    console.log("Monitored - growing at an acceptable rate.")
    console.log("plantArea is: "+plantArea)
}
else{
    console.log("Planted - room to plant more plants")
    console.log("plantArea is: "+plantArea)
}
console.groupEnd();

//* Part 2 *//
console.group("Part 2")
plantCount = 100;
let adjustedtesting = plantCount / 20;
weeks = 10;
radius = adjustedtesting * 5;
area = adjustedtesting * (pi * radius * radius)
console.log("The upscaled garden size required for starting with 100 plants is: "+area)
plantArea = space * plantCount * (Math.pow(plantRate, weeks))
if(plantArea > area * 0.8){
    console.log("Pruned - exceeding the capacity of the garden")
    console.log("plantArea is: "+plantArea)
}
else if(plantArea > area * 0.5){
    console.log("Monitored - growing at an acceptable rate.")
    console.log("plantArea is: "+plantArea)
}
else{
    console.log("Planted - room to plant more plants")
    console.log("plantArea is: "+plantArea)
}
console.log("The radius is: "+radius)
console.groupEnd()
//* Part 3 *//
console.group("Part 3")
