function SetUsername(username){
    this.username=username
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    // this.username=username
    this.email=email
    this.password=password
}
const detail = new createUser("Nitin","nitin@google.com","123")
console.log(detail)