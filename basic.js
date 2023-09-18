var a;
console.log(a);

var b=20;
console.log("val of the variable B:",b)

var c='azaaar';
console.log("data tyoe of th variable c is:",typeof(c))

var d='1';
console.log("data tyoe of th variable d is:",typeof(d))

var e='e';
console.log("data tyoe of th variable e is:",typeof(e))

var f=10;
console.log("data tyoe of th variable f is:",typeof(f))

var g=10.675;
console.log("dtype of the varibale f:",typeof(g))
// magic of the undefined line:
console.log("dtypeof the a:",typeof(a))

var h=true
console.log("special dtype of the h:",typeof(h))

// no let see the diffenrence between var and const:

var p=100;
console.log("var p before changeing:",p);

p=10;
console.log("var p after the change:",p);


const q=10;
console.log("var q with const:",q)

// q=q+10; 
// (we get an error like  [Error] TypeError: Attempted to assign to readonly property.
	// Global Code (basic.js:39))

        const name="azar";

        console.log(name);

        // name=ameer;[Error] ReferenceError: Can't find variable: ameer
	// Global Code (basic.js:47)

// in daily life its only work in the name type bcz name cant be changed:
// but the age of the persomn can be changes so name be as const and age be asthe var type


// data types:
// 2 tpes:primitive:=>string,number,boolean,int,bigint,undefined,null,symbol:
// non primitive:=>object


// operators
var x=2**8;
console.log("exponent:",x)

var x=10;
var y='10'
console.log("check only for the data",x==y)
console.log("check the data and type of the number:",x===y)





