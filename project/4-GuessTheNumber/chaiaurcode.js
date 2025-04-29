let randomno=(parseInt(Math.random()*100+1));
const submitbtn=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const restart=document.querySelector('.resultParas');

const p = document.createElement('p');
let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame){
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
       const guess = parseInt(userInput.value)
       validate(guess)
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if (guess<1){
        alert("Please enter a valid number which more then 1");
    }
    else if(guess>100){
        alert("Please enter a valid number which less then 100")
    }
    else{
        prevguess.push(guess)
        if(numguess === 10){
            displayguess(guess)
            displaymsg(`Game Over. Random number was ${randomno}`)
            endGame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===randomno)
    {
        displaymsg(`You gussed it right`);
        endGame();
    }
    else if(guess< randomno){
        displaymsg(`Number is too low`);
    }
    else if(guess> randomno){
        displaymsg(`Number is too high`);
    }
}

function displayguess(guess){
    userInput.value='';
    guessSlot.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
}

function displaymsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled',' ');
    p.classList.add('button');
    p.innerHTML=`<h2 class="newStart'>Start New Game</h2>`;
    restart.appendChild(p);
    playgame=false;
    newGame();
}

function newGame(){
    const newGamebutton=document.querySelector('.newStart');
        newGamebutton.addEventListener('click',(e)=>{
        randomno=(parseInt(Math.random()*100+1));
        prevguess=[];
        numguess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numguess}`;
        userInput.removeAttribute('disabled');
        restart.removeChild(p)
        playgame=true
    })
}
