// blocking code:
// syncronous code:

console.log('stmt-1')
console.log('stmt-2')
for(var x=0;x<=1000000000;x++){
        // blocking line 
}
console.log("stmt-3")


// asyncronous code:
console.log("out side the timer funciton 0:")
setTimeout(() => {
        //this may take the 3 milli sec to excicute to the console
        console.log("inside the timer funciotn:")
        
}, 3000);
console.log("out side the timer funciton 1:")
console.log("out side the timer funciton 2:")

function add(){
        console.log("funciton excicutes at botttom level")

}
add()


