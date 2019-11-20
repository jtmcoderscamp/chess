
import BoardCoordinates from "../board/boardCoordinates";

export default function findBishopBaseMoves(boardSituation, startingCoordinates, color) {
    let currentBoard = boardSituation.position;
    return checkMoves(currentBoard, startingCoordinates, color);

}

function checkMoves(currentBoard, startingCoordinates, color) {

    let posibleMoves = []; //Array with all possible moves
    let current = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y);

    //4 loop while for check every diagonal 
    // on the next revision try to do with one function

    current.x++;
    current.y++;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[current.x][current.y]==null) {
            posibleMoves.push(new BoardCoordinates(current.x,current.y));
        }

        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[current.x][current.y].color != color) {
                posibleMoves.push(new BoardCoordinates(current.x,current.y));
            }
            break;
        }
        current.x++;
        current.y++;
    }

    // back to value x and y from position coordinates
    current.x = startingCoordinates.x;
    current.y = startingCoordinates.y;
    current.x++;
    current.y--;

    while (BoardCoordinates.valid(current)) {
        if (currentBoard[current.x][current.y]==null) {
            posibleMoves.push(new BoardCoordinates(current.x,current.y));

        }
        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[current.x][current.y].color != color) {
                posibleMoves.push(new BoardCoordinates(current.x,current.y));
            }
            break;
        }
        current.x++;
        current.y--;
    }

    current.x = startingCoordinates.x;
    current.y = startingCoordinates.y;
    current.x--;
    current.y--;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[current.x][current.y]==null) {
            posibleMoves.push(new BoardCoordinates(current.x,current.y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[current.x][current.y].color != color) {
                posibleMoves.push(new BoardCoordinates(current.x,current.y));
            }
            break;
        }
        current.x--;
        current.y--;
    }

    current.x = startingCoordinates.x;
    current.y = startingCoordinates.y;
    current.x--;
    current.y++;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[current.x][current.y]==null) {
            posibleMoves.push(new BoardCoordinates(current.x,current.y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[current.x][current.y].color != color) {
                posibleMoves.push(new BoardCoordinates(current.x,current.y));
            }
            break;
        }
        current.x--;
        current.y++;
    }

    return posibleMoves;
}