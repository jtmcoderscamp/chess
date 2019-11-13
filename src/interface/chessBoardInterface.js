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

class ChessBoardInterface {
  constructor(parentNode, onFieldClick) {
    this.parentNode = parentNode;
    this.onFieldClick = onFieldClick;
  }

  chessBoard() {
    var board = document.querySelector('#root');
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];    
    var cells = [];

    function clickElement() {
    console.log("click");
    console.log(j);
    }

    for (var i = 0; i < alphabet.length; i++) {
            var divRow = document.createElement('div');
                divRow.classList.add("row");
                    for (var j = 8; j >= 1; j--) {
                        var div = document.createElement('div');
                        div.setAttribute("data-x", alphabet[i]);
                        div.setAttribute("data-y", j);
                        //console.log(this);
                        //console.log(div.getAttribute("x" + "data-x"));
                        //console.log(div.getAttribute("y" + "data-y"));
                        div.addEventListener("click", clickElement);
                
                    if (i % 2 == j % 2) {
                      div.classList.add("white");
                    } else {
                      div.classList.add("black");
                    }
                    divRow.append(div);

                  }
                  board.append(divRow);
                  // board.map(function () {
                  //   cells.push([this.data("x"), this.data("y")]);
                  //   return cells
                  // });
                  // console.log(cells);

                } 
  };
  
}

board = new ChessBoardInterface;
board.chessBoard();