// export default class ChessBoardInterface {
//     constructor(parentNode, onFieldClick) {

//     }
// }

var symbols = {
    "rookWhite" : "\u2656",
    "knightWhite" : "\u2658",
    "bishopWhite" : "\u2657",
    "queenWhite" : "\u2655",
    "kingWhite" : "\u2654",
    "pawnWhite" : "\u2659",

    "rookBlack" : "\u265c",
    "knightBlack" : "\u265e",
    "bishopBlack" : "\u265d",
    "queenBlack" : "\u265b",
    "kingBlack" : "\u265a",
    "pawnBlack" : "\u265f",
};

function ChessBoard() {

    var board = document.querySelector('#board');

    var cells = [];

    this.createBoard = function () {
         board.style.width = '400px';
         board.style.height = '400px';

            for (var i = 1; i <= 8; i++) {
                var divRow = document.createElement('div');
                divRow.classList.add("row");
                    for (var j = 1; j <= 8; j++) {
                        var div = document.createElement('div');
                        div.classList.add("unit");
                        div.setAttribute("data-x", i);
                        div.setAttribute("data-y", j);
                        //div.innerText = symbols.bishopBlack;
                
                    if (i % 2 == j % 2) {
                      div.style.backgroundColor = "white";
                    } else {
                      div.style.backgroundColor = "#7f7f7f";
                    }
                    divRow.append(div);
                  }
                  board.append(divRow);
                }
    };

}

var chess = new ChessBoard();
chess.createBoard();
