import BoardCoordinates from "../board/boardCoordinates";

export default function findPawnBaseMoves(boardSituation, startingCoordinates, color) {
    let actualBoard = boardSituation.position;
    return findMoves(currentBoard, startingCoordinates, color);
}

//definition of pawn moves

function findMoves(actualBoard, startingCoordinates, color) {
    let possibleMoves = []; //Output array
    let actual = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y);
    const forwardDirection;
        color === 'white' ? forwardDirection = 1 : forwardDirection = -1;

    //checking move 2 fields forward
    const oneForwardTargetCoords = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y + forwardDirection);
    const twoForwardTargetCoords = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y + 2*forwardDirection);
    const pawnInStartingPosition = function(twoForwardTargetCoords, color) {
        if ((color === 'white' && startingCoordinates.y === 1) || (color === 'black' && startingCoordinates.y === 6)) {
            return true;
        }
        else {
            return false;
        }
    }
    if (pawnInStartingPosition === true && oneForwardTargetCoords == null && twoForwardTargetCoords == null ) {
        possibleMoves.push(twoForwardTargetCoords);
    }
    else {
        console.log('illegal move');
    }

    //checking move 1 field forward
    if (oneForwardTargetCoords == null) {
        possibleMoves.push(oneForwardTargetCoords);
    }
    else {
        console.log('illegal move');
    }

    //checking beating diagonal left
    const diagonalLeft = new BoardCoordinates(startingCoordinates.x - forwardDirection, startingCoordinates.y + forwardDirection);
    if (diagonalLeft !== null) {
        possibleMoves.push(diagonalLeft);
    }
    else {
        console.log('illegal move');
    }

    //checking beating diagonal right
    const diagonalRight = new BoardCoordinates(startingCoordinates.x + forwardDirection, startingCoordinates.y + forwardDirection);
    if (diagonalRight !== null) {
        possibleMoves.push(diagonalRight);
    }
    else {
        console.log('illegal move');
    }
    
    return possibleMoves;
}