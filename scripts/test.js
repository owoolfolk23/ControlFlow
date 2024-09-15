const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius;
let weeks = 1;
const space = 0.8;
const plantRate = 2;
let plantArea = space * 20 * (Math.pow(plantRate, weeks));

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