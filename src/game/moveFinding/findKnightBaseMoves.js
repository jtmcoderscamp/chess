import BoardCoordinates from "../board/boardCoordinates";
class Knight {
    
    outOfBounds(i, j) {
        return ( i < 0 || i >= 8 || j < 0 || j >= 8 );
    }

    findMovesx(boardSituation, startingCoordinates, pieceColor){
        const knightMoves = [
            [-1, -2], [-2, -1], [1, -2], [-2, 1],
            [2, -1], [-1, 2], [2, 1], [1, 2]
        ];
        var moveX = startingCoordinates.x;
        var moveY = startingCoordinates.y;
        var nextMoves = [];
            for(var move of knightMoves) {
                var newMoveX = moveX + move[0];
                var newMoveY = movey + move[1];
                if( !outOfBounds(newMoveX, newMoveY)) {
                            let possiblePosition = boardSituation[newMovex][newMovey];
                            if(possiblePosition == null || possiblePosition.color != pieceColor){
                                nextMoves.push([newMoveX, newMoveX]);
                    }
                    }
                }
            
            return nextMoves;
    }
}