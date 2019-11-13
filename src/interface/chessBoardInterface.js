export default class ChessBoardInterface {
  constructor(parentNode, onFieldClick) {
    this.parentNode = parentNode;
    this.onFieldClick = onFieldClick;
  }

  chessBoard() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];    
    var cells = [];

    for (var i = 0; i < alphabet.length; i++) {
            var divRow = document.createElement('div');
                divRow.classList.add("row");
                    for (var j = 8; j >= 1; j--) {
                        var div = document.createElement('div');
                        div.setAttribute("data-x", alphabet[i]);
                        div.setAttribute("data-y", j);
                
                    if (i % 2 == j % 2) {
                      div.classList.add("white");
                    } else {
                      div.classList.add("black");
                    }
                    divRow.append(div);
                    cells.push(div);
                    console.log(cells);
                      cells.forEach(function (div) {
                          div.addEventListener("click", function (event) {
                              div.classList.toggle("active");
                          });
                      });

                  }
                  this.parentNode.append(divRow);
                } 
  };
}

board = new ChessBoardInterface (document.querySelector('#root'));
board.chessBoard();
