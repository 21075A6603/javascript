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
// non primitive elememts in the objects:
student={
        name:'azar',
        pass:true,
        cgpa:8.05,
        languages:['c++','c','python','javascript'],
        address:{
                street:'kasimdevipeata',
                pin:506352,
                hno:3-94/1,
                permit:true
        }

}
console.log('student data:',student)



// complex objects:

benz={
        model:'abz12',
        milage:40,
        features:{
                technology:'wireless connection',
                conneectivity:['usb','bluetooth'],
                safety:['blint spot','rare view camera'],
                style:['crome roof','diamond block'],
                luxery:['leather seating','panoroma roof']
        },
        emi:'$25000',
        paid:'$20000',

        checkpayment:function(){
                if(this.emi==this.paid){
                        console.log('*******no pendngs******'," ",'good to goooo')
                }
                else{
                        console.log("collect the vehicle from the customer:")
                }

        }

}
console.log(benz.checkpayment())






