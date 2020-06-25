/*
1. demonstrate three generations of prototype
2. demonstrate prototype chaining
3. demonstrate undefined
*/

grandPaSmurf = {
    name: 'GrandPa',
    age: '101',
    familyName : 'Smurfs',
    color: 'Blue',
    gender: 'M',
    print: function(){
        console.log('a function')
    }
}


PapaSmurf = Object.create(grandPaSmurf)
PapaSmurf.age = 50

smurfette = Object.create(PapaSmurf)
smurfette.age = 12
smurfette.gender = 'F'

//console.table(grandPaSmurf)
//console.table(PapaSmurf)
//console.table(smurfette)

console.log(smurfette.toString())
console.log(smurfette.color)
console.log(smurfette.ancestor)
