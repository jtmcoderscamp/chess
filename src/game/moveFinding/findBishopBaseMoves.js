
import BoardCoordinates from "../board/boardCoordinates";

export default function findBishopBaseMoves(boardSituation, startingCoordinates, color) {
    let currentBoard = boardSituation.position;
    return checkMoves(currentBoard, startingCoordinates, color);

}

function checkMoves(currentBoard, startingCoordinates, color) {

    let posibleMoves = []; //Array with all possible moves
    let current = new BoardCoordinates(startingCoordinates.x, startingCoordinates.y);

    //Change code to similar like rook piece 

    //4 loop while for check every diagonal 
    // on the next revision try to do with one function
    let x = startingCoordinates.x;
    let y = startingCoordinates.y;
    x++;
    y++;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        }

        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                posibleMoves.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x++;
        y++;
    }

    // back to value x and y from position coordinates
    x = startingCoordinates.x;
    y = startingCoordinates.y;
    x++;
    y--;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));

        }
        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                posibleMoves.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x++;
        y--;
    }

    x = startingCoordinates.x;
    y = startingCoordinates.y;
    x--;
    y--;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                posibleMoves.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x--;
        y--;
    }

    x = startingCoordinates.x;
    y = startingCoordinates.y;
    x--;
    y++;
    while (BoardCoordinates.valid(current)) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                posibleMoves.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x--;
        y++;
    }

    return posibleMoves;
}