import MoveFinder from "./game/moveFinding/moveFinder";
import MockBoardInterface from "./interface/mockBoardInterface";
import Game from "./game";
import findRookBaseMoves from "./game/moveFinding/findRookBaseMoves";
import findPawnBaseMoves from "./game/moveFinding/findPawnBaseMoves";
import ChessPiece from "./game/board/chessPiece";

/**
 * This file initializes the application
 * Code written here will be executed when application loads
 */

console.log("...");

let moveFinder = new MoveFinder();

moveFinder.registerAlgorithm("pawn", findPawnBaseMoves);
moveFinder.registerAlgorithm("rook", findRookBaseMoves);

const game = new Game(document.querySelector('#root'), MockBoardInterface, moveFinder, true);

game._currentSituation._actualPosition.position[5][2] = new ChessPiece("pawn","black");
game._display.setPosition(game._currentSituation._actualPosition.position);