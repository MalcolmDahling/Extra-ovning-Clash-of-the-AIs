document.body.insertAdjacentHTML('beforeend', `
    <div id="game">
        <p>Bot0 VS Bot1</p>
        <input type="button" id="play" value="Play">

        <div id="output"></div>
    </div> 
`);


let bot0Score = 0;
let bot1Score = 0;


document.getElementById('play').addEventListener('click', function(){
    document.getElementById('output').innerHTML = '';

    let bot0 = sign();
    document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot0 played: '+bot0+'</p>')

    let bot1 = sign();
    document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot1 played: '+bot1+'</p>')


    

    if(bot0 == bot1){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Draw</p>')
    }

    if(bot0 == 'Rock' && bot1 == 'Paper'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot1 Wins</p>')
        bot1Score++;
    }

    if(bot0 == 'Rock' && bot1 == 'Scissors'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot0 Wins</p>')
        bot0Score++;
    }

    if(bot0 == 'Paper' && bot1 == 'Rock'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot0 Wins</p>')
        bot0Score++;
    }

    if(bot0 == 'Paper' && bot1 == 'Scissors'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot1 Wins</p>')
        bot1Score++;
    }

    if(bot0 == 'Scissors' && bot1 == 'Rock'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot1 Wins</p>')
        bot1Score++;
    }

    if(bot0 == 'Scissors' && bot1 == 'Paper'){
        document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot0 Wins</p>')
        bot0Score++;
    }



    
    document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot0 Score: '+bot0Score+'</p>')
    document.getElementById('output').insertAdjacentHTML('beforeend', '<p>Bot1 Score: '+bot1Score+'</p>')
})





function sign(){

    let rand = Math.floor(Math.random()*3);

    if(rand == 0){
        return 'Rock';
    }
    if(rand == 1){
        return 'Paper';
    }
    if(rand == 2){
        return 'Scissors';
    }
}