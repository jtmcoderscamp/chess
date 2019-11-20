export default class ChessBoardInterface {
  constructor(parentNode, onFieldClick) {
    this.parentNode = parentNode;
    this.onFieldClick = onFieldClick;
  }

  chessBoard() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];    

    for (var i = 0; i < alphabet.length; i++) {
          var divRow = document.createElement('div');
              divRow.classList.add("row");
                  for (var j = 8; j >= 1; j--) {
                      var div = document.createElement('div');
                      div.setAttribute("data-x", alphabet[i]);
                      div.setAttribute("data-y", j);
                      div.addEventListener("click", this.onFieldClick);
              
                  if (i % 2 == j % 2) {
                    div.classList.add("white");
                  } else {
                    div.classList.add("black");
                  }
                  divRow.append(div);
                  div.addEventListener("click", this.onFieldClick);
                }
                this.parentNode.append(divRow);
              } 
  };
}

board = new ChessBoardInterface (document.querySelector('#root'), function (event) {
  var cells = [];

    console.log(this.getAttribute("data-x"));
    console.log(this.getAttribute("data-y"));

  this.classList.toggle("active");

  cells.push([this.getAttribute("data-x"), this.getAttribute("data-y")])
    console.log(cells);

});

board.chessBoard();
