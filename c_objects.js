console.log("hell world")

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