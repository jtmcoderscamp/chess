import BoardCoordinates from "../board/boardCoordinates";

export default function findRookBaseMoves(boardSituation, startingCoordinates, color) {        
        let currentBoard = boardSituation.position;
        return checkMoves(currentBoard, startingCoordinates, color);
}

function checkMoves(currentBoard, startingCoordinates, color)
{
    let possibleMoves = []; //array with all possible moves
    //variables used in while loop 
    let x = startingCoordinates.x+1;
    let move = true;
    while(move) //as long as you can move right and push coordinates to array
    {
        move=makeStep(currentBoard, x, startingCoordinates.y, color, possibleMoves);
        x++;
    }

    x = startingCoordinates.x-1;
    move = true;
    while(move)//as long as you can move left and push coordinates to array
    {
        move=makeStep(currentBoard,x,startingCoordinates.y, color, possibleMoves);
        x--;
    }

    let y = startingCoordinates.y+1;
    move = true;
    while(move)
    {
        move=makeStep(currentBoard, startingCoordinates.x, y, color, possibleMoves);
        y++;
    }

    y = startingCoordinates.y-1;
    move = true;
    while(move)
    {
        move=makeStep(currentBoard, startingCoordinates.x, y, color, possibleMoves);
        y--;
    }

    return possibleMoves;
}


function makeStep(currentBoard, x,y, color, aggregator){
    if(x<0 || x>7 || y<0 || y>7)
        return false;
    if (currentBoard[y][x]==null)
    {
        aggregator.push(new BoardCoordinates(x,y));
        return true;
    }
    else
    {
        if(currentBoard[y][x].color!=color)
            aggregator.push(new BoardCoordinates(x,y));
        return false;
    }
    
}