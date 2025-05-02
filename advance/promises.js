const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(()=>{
    console.log('promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 task is completed")
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 is consumed')
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nitin",email:"nitin@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Nitin",Password:"Nitin123"})
        }
        else{
            reject("ERROR ")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({Language:"Javascript",Password:"1234"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()