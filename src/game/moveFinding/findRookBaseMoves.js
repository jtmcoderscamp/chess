import BoardCoordinates from "../board/boardCoordinates";

export default function findRookBaseMoves(boardSituation, startingCoordinates, color) {        
        const currentBoard = boardSituation.position;
        return checkMoves(currentBoard, startingCoordinates, color);
}

function checkMoves(currentBoard, startingCoordinates, color)
{
    let possibleMoves = []; //array with all possible moves
    //call recursive function which checks possible moves in directions:left,right,up,down
    makeStep(currentBoard, startingCoordinates, color, possibleMoves, "left");
    makeStep(currentBoard, startingCoordinates, color, possibleMoves, "right");
    makeStep(currentBoard, startingCoordinates, color, possibleMoves, "up");
    makeStep(currentBoard, startingCoordinates, color, possibleMoves, "down");
    //return array with all possible moves
    return possibleMoves;
}


function makeStep(currentBoard, currentCoordinates, color, aggregator, direction){
    //making a new variable to fix some references problems 
    let curr = new BoardCoordinates(currentCoordinates.x, currentCoordinates.y);
    //depending on direction increment or decrement proper variable
    switch(direction)
    {
        case "up":
            curr.y++;
            break;
        case "down":
            curr.y--;
            break;
        case "left":
            curr.x--;
            break;
        case "right":
            curr.x++;
            break;
    }
    //check if you are still on chessboard
    if(BoardCoordinates.valid(curr))
    {
        //check for empty place on board
        if (currentBoard[curr.x][curr.y]==null)
        {
            //place is empty - it is a legal move
            aggregator.push(curr);
            //you haven't found another chess piece - you can move further
            makeStep(currentBoard, curr, color, aggregator, direction);
        }
        else
        {
            //check if you can capture this piece, if you can it is a legal move
            if(currentBoard[curr.x][curr.y].color!=color)
                aggregator.push(curr);
            //you cant move further because you've found another chess piece
        }
    }
}