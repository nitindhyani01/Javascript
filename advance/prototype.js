let heros = ["thor","spiderman"]
let heropower={
    thor:"Hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}
Object.prototype.nitin=function(){
    console.log(`Nitin is present`)
}

Array.prototype.heynitin=function(){
    console.log(`Nitin says hello`)
}
// heropower.nitin()
// heros.heynitin()
// heropower.heynitin()

let anotherusername="Hey how are you  "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherusername.trueLength()
"Nitin".trueLength()