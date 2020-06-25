function Alphabets() {
    var a = "A"
    var b = "B"
    function printFirst() {
        console.log(`first alphabet is  ${a}`)
    }
    //returning the pointer to function rather than calling it
    return printFirst
}
var first  = Alphabets()
first()