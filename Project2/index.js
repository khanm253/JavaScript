const choices = {1:'rock', 2:'paper', 3:'scissor'}

function rpsGame(yourChoice){
    var humanChoice, botChoice, result, output, text;
    humanChoice = yourChoice.id;
    botChoice = Math.floor((Math.random() * 3) + 1)
    console.log('Human: '+ humanChoice + ' Bot: ' + choices[botChoice])
    result = decideWinner(humanChoice, choices[botChoice])

    if(result == 1){
        output = 'The match is a draw! You and the computer both chose: ' + humanChoice;
    }else if(result == 2){
        output = 'You Won! The computer chose: ' + choices[botChoice];
    }else{
        output = 'You Lost :( The computer chose: ' + choices[botChoice];
    }
}

function decideWinner(human, bot){
    if(human == bot){
        return 1;
    }else if(human == "rock" && bot == "scissor"){
        return 2;
    }else if(human == "scissor" && bot == "paper"){
        return 2;
    }else if(human == "paper" && bot == "rock"){
        return 2;
    }else{
        return 3;
    }
}