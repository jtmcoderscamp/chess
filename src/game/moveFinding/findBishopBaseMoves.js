
import BoardCoordinates from "../board/boardCoordinates";

export default function findBishopBaseMoves(boardSituation, startingCoordinates, color) {
    let currentBoard = boardSituation.position;
    return checkMoves(currentBoard, startingCoordinates, color);

}

function checkMoves(currentBoard, startingCoordinates, color) {

    let posibleMoves = []; //Array with all possible moves

    //Change code to similar like rook piece 

    //4 loop while for check every diagonal 
    // on the next revision try to do with one function
    let x = startingCoordinates.x;
    let y = startingCoordinates.y;
    x++;
    y++;
    while (x > 0 && x <= 8 && y > 0 && y <= 8) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        }

        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                aggregator.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x++;
        y++;
    }

    // back to value x and y from position coordinates
    let x = startingCoordinates.x;
    let y = startingCoordinates.y;
    x++;
    y--;
    while (x > 0 && x <= 8 && y > 0 && y <= 8) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));

        }
        else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                aggregator.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x++;
        y--;
    }

    let x = startingCoordinates.x;
    let y = startingCoordinates.y;
    x--;
    y--;
    while (x > 0 && x <= 8 && y > 0 && y <= 8) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                aggregator.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x--;
        y--;
    }

    let x = startingCoordinates.x;
    let y = startingCoordinates.y;
    x--;
    y++;
    while (x > 0 && x <= 8 && y > 0 && y <= 8) {
        if (currentBoard[x][y] == null) {
            posibleMoves.push(new BoardCoordinates(x, y));
        } else {
            //check if you can capture this piece, if you can it is a legal move
            if (currentBoard[x][y].color != color) {
                aggregator.push(new BoardCoordinates(x, y));
            }
            break;
        }
        x--;
        y++;
    }

    if (posibleMoves.length) return posibleMoves;
}