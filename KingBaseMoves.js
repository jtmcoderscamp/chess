import BoardCoordinates from "../board/boardCoordinates";

export default function findKingBaseMoves(boardSituation, startingCoordinates, color) {        
    const currentBoard = boardSituation.position;
    return checkMoves(currentBoard, startingCoordinates, color);
}
//Max size of board.
var boardSize = function(X, Y) {
    return( X<0 || X>= 8 || Y<0 || Y>=8 );
}
function checkMoves(currentBoard, startingCoordinates, color)
{
    let possibleMoves = []; //Possible moves around the King

    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "left");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "left UpperCorner");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "up");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "right UpperCorner");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "right");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "RightBottomCorner");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "down");
    moveTo(currentBoard, startingCoordinates, color, possibleMoves, "LeftBottomCorner");

    return possibleMoves;
}



/*//definition of finding possible moves for king
function movesFindingX(boardSituation, startingCoordinates, color) {
    var moveX = startingCoordinates.x;
    var moveY = startingCoordinates.y;
    var move 
    var nextPossibleMoves = [];
        for (move){
            var newMoveX = moveX + move;
            var newMoveY = moveY + move;
        }
        return nextPossibleMoves;
}


import BoardCoordinates from "../board/boardCoordinates";

export default function findRookBaseMoves(boardSituation, startingCoordinates, color) {
    const z= checkMovesHorizontal(boardSituation, startingCoordinates, color); 
    const p= checkMovesVertical(boardSituation, startingCoordinates, color);
    const b = [...p, ...z]; //makes one array of possible moves
    return b;   //returns this array
}


function checkMovesHorizontal (boardSituation, startingCoordinates, color){
    let x = startingCoordinates.x-1;
    let movesHorizontal=[];
    while(x>=0)
    {
        if(boardSituation[startingCoordinates.y][x]!=1)
            movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
        else
            break;
        x--;     
    }
    x=startingCoordinates.x+1;
    while(x<8)
    {
        if(boardSituation[startingCoordinates.y][x]!=1)
            movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
        else
            break;
        x++;
    }
    return movesHorizontal;
}

function checkMovesVertical(boardSituation, startingCoordinates, color){
    let y=startingCoordinates.y-1;
    let movesVertical=[];
    while(y>=0)
    {
        if(boardSituation[y][startingCoordinates.x]!=1)
            movesVertical.push(new BoardCoordinates(startingCoordinates.x, y));
        else
            break;
        y--;
    }
    y=startingCoordinates.y+1;
    while(y<8)
    {
        if(boardSituation[y][startingCoordinates.x]!=1)
            movesVertical.push(new BoardCoordinates (startingCoordinates.x, y));
        else
            break;
        y++;
    }
    return movesVertical;
}
*/