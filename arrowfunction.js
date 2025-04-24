const user={
    username:"Nitin",
    Price: 999,
    welcomemessage:function(){
        console.log(`${this.username},Welcome to website`);
    }
}

// user.welcomemessage()
// user.username="Aman"
// user.welcomemessage()
// console.log(this)

// function one(){
//     console.log(this)
// }
// one()

/*
const name= () => {
    console.log(this)
}
name()
*/

/*const sum = (num1,num2)=>{
    return num1+num2
}
console.log(sum(58,11))

const sum = (num1,num2)=> num1+num2
console.log(sum(58,11))
*/

const name = () => ({username:"Nitin"})
console.log(name())