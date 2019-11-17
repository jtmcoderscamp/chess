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
