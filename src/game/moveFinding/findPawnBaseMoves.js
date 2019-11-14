import BoardCoordinates from "../board/boardCoordinates";

//definition of pawn moves
var pawnBaseMoves = [[1, 0], [2, 0]];

//definition of board size and moves out of the board - if value=false => move out of board
var outOfBoard = function(a, b) {
    return( a<0 || a>= 8 || b<0 || b>=8 );
}

//definition of finding possible moves for pawn
function movesFindingX(boardSituation, startingCoordinates, color) {
    var moveX = startingCoordinates.x;
    var moveY = startingCoordinates.y;
    var move //change of position
    var nextPossibleMoves = [];
        for (move){
            var newMoveX = moveX + move;
            var newMoveY = moveY + move;
        }
        return nextPossibleMoves;
}
/*
export default function findQueenBaseMoves(boardSituation, startingCoordinates, color) {
    //TODO: implement this properly once the dependencies are completed.
    return [...findBishopBaseMoves(), ...findRookBaseMoves()];
} 
*/