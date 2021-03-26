
var game = {
    user: '',
    computer: '',
    currentPlayer: '',
    moves: 1,
};
function setFigure(id)
{
    if (id === 'x') {
        game.user = 'x';
        game.computer = 'o';
    } else if (id === 'o') {
        game.user = 'o';
        game.computer = 'x';
    }
    hideshow();
    firstMove();
    setCurrentPlayer('user');
}
function hideshow() {
    var elems = document.getElementsByClassName('btn');
    var i;
    for (i = 0; i < elems.length; i++)
    {
        elems[i].style.display = 'none';
    }
}
function setCurrentPlayer(current) {
    game.currentPlayer = current;
}
function firstMove()
{
    document.getElementById('fifth').removeAttribute('onClick');
    document.getElementById('fifth').innerHTML = game.computer.toString();
}

function icon(id) {
    if (game.currentPlayer === 'user')
    {
        console.log(id);
        document.getElementById(id).innerHTML = game.user;
        document.getElementById(id).removeAttribute('onClick');
        if(gameStatus() ===1)
            return 0;
        setCurrentPlayer('computer');
    }
    else if (game.currentPlayer === 'computer')
    {
        console.log(game.user);
        document.getElementById(id).innerHTML = game.computer;
        document.getElementById(id).removeAttribute('onClick');
        if(gameStatus() ===1)
            return 0;
        setCurrentPlayer('user');
    }
    game.moves++;
    if (game.currentPlayer === 'computer')
    {
        computer();
    }
}
function computer()
{
    switch (true) {
        case document.getElementById('first').textContent !== game.user && document.getElementById('first').textContent !== game.computer:
            icon('first');
            break;
        case document.getElementById('second').textContent !== game.user && document.getElementById('second').textContent !== game.computer:
            icon('second');
            break;
        case document.getElementById('third').textContent !== game.user && document.getElementById('third').textContent !== game.computer:
            icon('third');
            break;
        case document.getElementById('fourth').textContent !== game.user && document.getElementById('fourth').textContent !== game.computer:
            icon('fourth');
            break;
        case document.getElementById('fifth').textContent !== game.user && document.getElementById('fifth').textContent !== game.computer:
            icon('fifth');
            break;
        case document.getElementById('sixth').textContent !== game.user && document.getElementById('sixth').textContent !== game.computer:
            icon('sixth');
            break;
        case document.getElementById('seventh').textContent !== game.user && document.getElementById('seventh').textContent !== game.computer:
            icon('seventh');
            break;
        case document.getElementById('eight').textContent !== game.user && document.getElementById('eight').textContent !== game.computer:
            icon('eight');
            break;
        case document.getElementById('ninth').textContent !== game.user && document.getElementById('ninth').textContent !== game.computer:
            icon('ninth');
            break;
    }
}


function gameStatus() {
        var currentPlayer;

        if (game.currentPlayer === 'user')
        {
            currentPlayer = game.user;
        } else if (game.currentPlayer === 'computer')
        {
            currentPlayer = game.computer;
        }
        switch (true){
            case document.getElementById('first').textContent === currentPlayer && document.getElementById('second').textContent === currentPlayer && document.getElementById('third').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('fourth').textContent === currentPlayer && document.getElementById('fifth').textContent === currentPlayer && document.getElementById('sixth').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('seventh').textContent === currentPlayer && document.getElementById('eight').textContent === currentPlayer && document.getElementById('ninth').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('first').textContent === currentPlayer && document.getElementById('fourth').textContent === currentPlayer && document.getElementById('seventh').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('second').textContent === currentPlayer && document.getElementById('fifth').textContent === currentPlayer && document.getElementById('eight').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('third').textContent === currentPlayer && document.getElementById('sixth').textContent === currentPlayer && document.getElementById('ninth').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('first').textContent === currentPlayer && document.getElementById('fifth').textContent === currentPlayer && document.getElementById('ninth').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case document.getElementById('third').textContent === currentPlayer && document.getElementById('fifth').textContent === currentPlayer && document.getElementById('seventh').textContent===currentPlayer:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += game.currentPlayer;
                document.getElementById('Final').style.display = 'block';
                return 1;
            case game.moves === 8:
                setTimeout(()=>{hideBoard();},2000);
                document.getElementById('Final').innerHTML += 'no one';
                document.getElementById('Final').style.display = 'block';
                return 1;
            default:
                return 0;
        }

    }
function hideBoard()
{
    var board = document.getElementsByClassName('gameBoard');
    var i;
    for (i = 0; i < board.length; i++)
    {
        board[i].style.display = 'none';
    }
}