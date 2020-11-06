//Challenge 1: Your Age in Days



function ageInDays(){
 let birthYear = prompt('What year where you born... Good Friend?'); 
 let ageInDayss = (2020 - birthYear) * 365;
 let h1 = document.createElement('h1');
 let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
 
}

function reset() {
    document.getElementById('ageInDays').remove()
}

// Challenge 2: Cat Generator

function generateCats(){
    let img = document.createElement('img');
    let div = document.getElementById('flex-box-image')
    img.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg');
    div.appendChild(img)
    img.setAttribute('width', '250');
    img.setAttribute('height', '175');
    img.setAttribute('alt', 'Cool Cat')
    document.getElementById('flex-box-image').appendChild(img);
}


// Challenge 3: Rock, Paper, Scissors


const playGame = (yourChoice) => {
    let humanChoice = yourChoice.id;
    let computerChoice = getComputerChoice();
    let results = determineWinner(humanChoice, computerChoice);
    rpsFrontEnd(yourChoice.id, computerChoice, results);
}  


// get computers choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num === 0){
        return 'rock'
    } else if (num === 1){
        return 'paper'
    } else if (num === 2){
        return 'scissors'
    }
}
// determine winner 
const determineWinner = (humanChoice, computerChoice) => {
   
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } 
    if (humanChoice === 'rock'){
        if(computerChoice === 'scissors'){
            return 'You Won!'
        } else if(computerChoice === 'paper'){
            return 'You Lost!'
        }
    } 

    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You won!'
        } else if (computerChoice === 'scissors') {
            return 'You Lost!'
        }
    } 

    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You Won!'
        } return('You Lost');
        
    }
}


// How frontend will look 
function rpsFrontEnd(humanImageChoice, compImageChoice, determineWinner){
    let imageDatabase = {
       'rock': document.getElementById('rock').src,
       'paper': document.getElementById('paper').src,
       'scissors': document.getElementById('scissors').src,
    }

    //Remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');
   

    humanDiv.innerHTML = "<img style='box-shadow:5px 5px 5px 5px #7B241C' src='" + imageDatabase[humanImageChoice]+"height=150 width=150;'>"
    messageDiv.innerHTML = "<h1>" + determineWinner + "</h1> " 
    botDiv.innerHTML = "<img style='; box-shadow:5px 5px 5px 5px black' src='" + imageDatabase[compImageChoice] +"height=150 width= 150;'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv)

}

function restart(){
   document.location.href = '';

}


  


