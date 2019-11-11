import BoardCoordinates from "../board/boardCoordinates";

var knightMoves = [
    [-1, -2], [-2, -1], [1, -2], [-2, 1],
    [2, -1], [-1, 2], [2, 1], [1, 2]
];
var outOfBounds = function(i, j) {
    return ( i < 0 || i >= 8 || j < 0 || j >= 8 );
}

function findMovesx(boardSituation, startingCoordinates, pieceColor){
    var movex = startingCoordinates.x;
    var movey = startingCoordinates.y;
    var nextMoves = [];
        for(var move of moves) {
             var newMovex = movex + move[0];
             var newMovey = movey + move[1];
             if( !outOfBounds(newMovex, newMovey)) {
                        let possiblePosition = boardSituation[newMovex][newMovey];
                        if(possiblePosition == null && possiblePosition.color != pieceColor){
                            nextMoves.push([newMovex, newMovey]);
                   }
                }
             }
        
        return nextMoves;
   }