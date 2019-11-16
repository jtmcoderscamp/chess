import BoardCoordinates from "../board/boardCoordinates";

export default function findPawnBaseMoves(boardSituation, startingCoordinates, color) {
    let actualBoard = boardSituation.position;
    return findMoves(currentBoard, startingCoordinates, color);
}

//definition of pawn moves


function findMoves(actualBoard, startingCoordinates, color) {
    let possibleMoves = []; //Output array
    let actual = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y);
    let deltax = [0, 1];
    let deltay = [1, 2];
    //checking move 2 fields forward
    if ((startingCoordinates.y=2 || startingCoordinates.y=7) && (startingCoordinates.y + 1 == null)) && (startingCoordinates.y + 2 == null) {
        startingCoordinates.x + deltax[0];
        startingCoordinates.y + deltay[1];
        possibleMoves.push(actual);
    }
    //checking move 1 field forward
    else if (startingCoordinates.y + 1 == null) {
        startingCoordinates.x + deltax[0];
        startingCoordinates.y + deltay[0];
        possibleMoves.push(actual);
    }
    else if () {

    }
    else {

    }
    return possibleMoves;
}