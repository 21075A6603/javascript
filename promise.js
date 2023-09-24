console.log("promise method implimentation:")

let commited=false
 
let obj1=new Promise((fullfilled,rejected)=>{
        if(commited){
                setTimeout(() => {
                        fullfilled("i will marry you:")
                }, 2000);
        }
        else{
                setTimeout(() => {
                        rejected("sorry iam not commited:")
                }, 4000);
        }

})

// now thw promise is used by the receiver:

obj1
.then((message)=>{console.log("message is:",message)})
.catch((err)=>{console.log("error is :",err)})


let call=true 
let obj2=new Promise((call,nocall)=>{
       if(call){
        setTimeout(() => {
                call("i will call you deffinatly:") 
         }, 2000);
       }
       else{

       }setTimeout(() => {
        nocall("sorry iam busy:")
       }, 3000);
})
obj2
.then((mess)=>{console.log("i wont call you",mess)})
.catch((error)=>{console.log("i call you",error)})

// example 3:

let paid=true

let obj3=new Promise((promote,domoted)=>{
        if(paid){
                setTimeout(() => {
                        promote("you have paid the money you an go now")
                }, 2000);
        }
        else{
                setTimeout(() => {
                       domoted("dont allow him dint paid money:") 
                }, 2000);
        }
})
console.log(obj3)

obj3
.then((mes)=>{console.log("paid",mes)})
.catch((err)=>{console.log("not paid",err)})