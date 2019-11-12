import BoardCoordinates from "../board/boardCoordinates";

export default function findRookBaseMoves(boardSituation, startingCoordinates, color) {        
        let currentBoard = boardSituation.position;
        return checkMoves(currentBoard, startingCoordinates, color);
}

function checkMoves(currentBoard, startingCoordinates, color)
{
    let possibleMoves = []; //array with all possible moves
    //call recursive function which checks possible moves in directions:left,right,up,down
    makeStep(currentBoard, startingCoordinates.x, startingCoordinates.y, color, possibleMoves, "left");
    makeStep(currentBoard, startingCoordinates.x, startingCoordinates.y, color, possibleMoves, "right");
    makeStep(currentBoard, startingCoordinates.x, startingCoordinates.y, color, possibleMoves, "up");
    makeStep(currentBoard, startingCoordinates.x, startingCoordinates.y, color, possibleMoves, "down");
    //return array with all possible moves
    return possibleMoves;
}


function makeStep(currentBoard, x, y, color, aggregator, direction){
    //depending on direction increment or decrement proper variable
    switch(direction)
    {
        case "up":
            y++;
            break;
        case "down":
            y--;
            break;
        case "left":
            x--;
            break;
        case "right":
            x++;
            break;
    }
    //check if you are still on chessboard
    if(x<0 || x>7 || y<0 || y>7)
        return false;
    //check for empty place on board
    if (currentBoard[y][x]==null)
    {
        aggregator.push(new BoardCoordinates(x,y));
        //you haven't found another chess piece - you can move further
        return makeStep(currentBoard, x, y, color, aggregator, direction);
    }
    else
    {
        //check if you can capture this piece, if you can it is a legal move
        if(currentBoard[y][x].color!=color)
            aggregator.push(new BoardCoordinates(x,y));
        return false;
    }
    
}