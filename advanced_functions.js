function some(x){
        console.log(x)
}
some([1,2,3,4])


// functions call another function:
// called callback functions:
function test1(){
        console.log("test1 called")
}
function test2(a){
        console.log(a())
}

test1(test2)


// methods advanced:

// filter method:
console.log("filter method:")
var x=[10,40,63,85,92,77,338,935]

let gettheGreater50=x.filter(function(value){
        return value>50
})
console.log("number greater then the 50:",gettheGreater50)


// finel way to use the call back functions:
let even=x.filter(value=>value%2==0)
console.log("even numbers in the array:",even)

// lets try to modify the data in the array:
let adding=x.filter(value=>value+10) 
console.log("adding 10 to each ele in the array:",adding)

// map method:

let adding2=x.map(value=>value+10)
console.log("adding 10 using map method:",adding2)




// for each loop
arr=[20,40,74,85,43,96,65,57]
arr.forEach((element,index) => {
        console.log(index,element)

})

// reduce method

let sum=arr.reduce((ac,val)=>ac+val)
console.log("sum of n numbers:",sum)

array=[100,294,74,383,995,7373,25273]

let cond=array.reduce((acc,valu)=>acc>valu?acc:valu)
console.log("big number via the :",cond)


let find_num=array.find(element=>element==383)
console.log("finding number:",find_num)

if(find_num=="undefined"){
        console.log("element not found")
}
else{
        console.log("element found")
}
let find_ind=array.findIndex(element=>element==995)
if(find_ind=="undefined"){
        console.log("element not found")
}
else{
        console.log("foud at",find_ind)
}









