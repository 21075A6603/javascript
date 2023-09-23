// object literal aproch
car={
        name:'audi',
        model:'x86',
        milage:'30kmol',
        cost:'$1200'
}

console.log("type of the object will be printed:",typeof car)
console.log(car.name)
console.log(car.speed='300') 
console.log(car)
// deletin gthe attribute:
delete car.milage
console.log('deleting the attaribute milage:',car)

// modify the data:
car.cost='$1300'
console.log('changing data of the car cost:',car)
// iteratig the array:

for(let val in car){
        console.log(car[val])
}





