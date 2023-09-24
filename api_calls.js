fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(apiData=>console.log(apiData))
        .catch(err=>console.log(err))

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(Data=>console.log(Data)
.catch(er=>console.log(er)))
