var arr=[]
console.log("data type of the array:",typeof(arr))
// here we will be knowing that function is also the type of the onbject:
console.log("lenght",arr.length)


var arr2=[1,2,3,4,5,6,7,8,9,10]
var len=arr2.length
console.log(len)
console.log(arr2)
console.log(arr2[0])
console.log(arr2[1])
console.log("array in for loop:")
for(var index =0;index<arr2.length;index++){
        console.log(arr2[index])
}

// for of looop in arrays:
console.log("array in for of loop:")
for( var v of arr2){
        console.log(arr2[v])
}



// operations on the arrays:

var a=[10,20,30,40,50,60]
console.log("actual array:",a)
// insertion opearation:
a.unshift(100,200)
console.log("inserteed at front:",a)

// inserted at middle:
// syntax:splice(index,no.of elemens to remove,element to insert)
a.splice(3,0,1000)
console.log("inserted at 3 rd place:",a)
a.splice(3,1,1000)
console.log("inserted at 3 rd place:",a)

// adding the elements at the end of the aarrray
a.push(276,286)
console.log("inseeted at the end if the array:",a)


// delete oparation of arrays:

var x=a.shift()
console.log(a)
console.log("first element removes",x)

// delete at the middle
a.splice(2,1)
console.log("2nd ele rem:",a)
// deleting the end of the array:

a.pop()
console.log("last ele rem:",a)









