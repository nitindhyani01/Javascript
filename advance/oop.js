const user = {
    username:"nitin",
    logincount:8,
    getuserdata: function(){
    // console.log(`username is = ${this.username}`);
    console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getuserdata)
// console.log(this)

function User(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
        console.log(`Hello ${this.username}`)
    }
    return this
}
const UserOne=new User("Nitin",12,true);
const UserTwo=new User("Aman",15,false);
console.log(UserOne.constructor)
// console.log(UserTwo)