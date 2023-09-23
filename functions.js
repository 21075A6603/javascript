function add(a,b){
        if(a>b){
                console.log("a is bigger one")
        }
        else if(a==b){
                console.log("both are equal")
        }
        else{
                console.log(" b is bigger one then a")
        }
}

// funciton declaration
add(10,20)


// function expressions:
// function name is acet as the variable in 
// this case which is nt their i any other language:
// functoin is anonymos
add=function(){
        console.log("function expression called:")
}
var ans2=add()



console.log(ans2)



// function in array way called arrow function:
// this funciton used only at the time of single statement :
// this the arrow operator will be act as the retun keyword in the js
var add =(x,y) =>x+y

var sum=add(10,20)
console.log("sum of the numbers in the arrow function:",sum);



var sub=(p,q) => (p-q)

var ans3=sub(200,464)
console.log("substraction in the arrow",ans3)


// ?terninary operator in the arrow functions

big=(a,b)=>a>b ?a:b

var get_val=big(2868,2987)
console.log("the values from the ternaru operator:",get_val)