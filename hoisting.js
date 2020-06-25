

function hoistDemo() {
    console.log("No param")
}

// this second function overwrites the first due to hoisting 
function hoistDemo(val) {
    console.log("Value is", val)
}


hoistDemo() // calls hoistDemo with params 


hoistDemo(1)  // calls hoistDemo with params 



