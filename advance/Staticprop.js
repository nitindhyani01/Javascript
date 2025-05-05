class User{
    constructor(username){
        this.username=username
    }

    logMe(){
       console.log(`Username: ${this.username}`) 
    }
    static createId(){
        return `123`
    }
}   

const newuser = new User("Nitin")
console.log(newuser.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const teacher = new Teacher("Aman","aman@123.com")
console.log(teacher.createId())