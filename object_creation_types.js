/*
Prototype chaining - looks for missing properties in parent object.

*/

bigB = {
    name: 'Amitab',
    lastName: 'Bachan'
}

//console.table(bigB)

//METHOD 2
smallB = Object.create(bigB)

console.log(smallB.name)  //takes name from Prototype

console.log(smallB.toString())  
// toString() function comes from smallB -> bigB -> __proto__ 
// __proto__ is root object added to every object we create 

console.log(smallB.ancestor) //undefined

//console.log(smallB.ancestor.name ) //NPE


//METHOD 3
//NOT RECOMMENDED  - Slow / inefficient 

obj = new Object()


/*
NOTES:
context of this -> points to object inside an object, 
this points to global pointer when called within a local / global function 

overriding can be done from child object on top of parent object
overloading cannot be done in js.. 
ex:

*/

function printme()
{
    console.log('printme with 0 params')
}

function printme(msg)
{
    console.log('printme with 1 param')
}

printme()
printme('message')

//METHOD 4 

/*
Using functions
On creating a function, a function object and a prototype object gets created
objects can be created with this function, and prototype is shared accross all objects created for this function
Refer doc - usingFunctionsAsClass.js   for example
*/ 