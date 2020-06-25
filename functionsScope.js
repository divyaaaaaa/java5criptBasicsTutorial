function gfn() {
    console.log("Global Function", this.x)
}

var vfunc = function vfn() {
    console.log("Var Function", this.x)
}

function lfn() {
    // corrupts global space
    this.funny = 'funny'
    console.log("Local Func", this.x)
}

obj = {
    log: function() {
        var x = 5
        console.log("Object Func", this.x, x)
    }
}

// Initial run
gfn()
vfunc()
lfn()
obj.log()  

