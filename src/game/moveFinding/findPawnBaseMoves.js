import BoardCoordinates from "../board/boardCoordinates";

export default function findPawnBaseMoves(boardSituation, startingCoordinates, color) {
    let actualBoard = boardSituation.position;
    return findMoves(currentBoard, startingCoordinates, color);
}
//function which cheks if it's the first move of pawn in the game

const pawnInStartingPosition = function(startingCoordinates, color) {
    return ((color === 'white' && startingCoordinates.y === 1) || (color === 'black' && startingCoordinates.y === 6))
}

//definition of pawn moves

function findMoves(actualBoard, startingCoordinates, color) {
    let possibleMoves = []; //Output array
    let actual = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y);
    const forwardDirection = color === 'white' ? 1 : -1;

    //checking move 1 and 2 fields forward
    const oneForwardTargetCoords = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y + forwardDirection);
    const twoForwardTargetCoords = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y + 2*forwardDirection);
    
    if (actualBoard[oneForwardTargetCoords.x][oneForwardTargetCoords.y] == null) {
        possibleMoves.push(oneForwardTargetCoords);
            if (pawnInStartingPosition(startingCoordinates, color) === true && actualBoard[oneForwardTargetCoords.x][oneForwardTargetCoords.y] == null && actualBoard[twoForwardTargetCoords.x][twoForwardTargetCoords.y] == null ) {
            possibleMoves.push(twoForwardTargetCoords);
            }
    }   

    //checking beating diagonal left
    const diagonalLeftTargetCoords = new BoardCoordinates(startingCoordinates.x - 1, startingCoordinates.y + forwardDirection); //in case of y coordinate the use of forwardDirection is still necessary, right?
    if (actualBoard[diagonalLeftTargetCoords.x][diagonalLeftTargetCoords.y] && actualBoard[diagonalLeftTargetCoords.x][diagonalLeftTargetCoords.y].color !== color) {
        possibleMoves.push(diagonalLeftTargetCoords);
    }

    //checking beating diagonal right
    const diagonalRightTargetCoords = new BoardCoordinates(startingCoordinates.x + 1, startingCoordinates.y + forwardDirection);
    if (actualBoard[diagonalRightTargetCoords.x][diagonalRightTargetCoords.y] && actualBoard[diagonalRightTargetCoords.x][diagonalRightTargetCoords.y].color !== color) {
        possibleMoves.push(diagonalRightTargetCoords);
    }
    
    return possibleMoves;
}