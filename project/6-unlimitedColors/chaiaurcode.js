const randomcolor=()=>{
    const hex="012345678ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalId
let changeBgColor = () => {
    document.body.style.backgroundColor = randomcolor();
}

const startChangingColor=()=>{
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000);
    }
};
const stopChangingColor=()=>{
    clearInterval(intervalId)
    intervalId=null;
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)