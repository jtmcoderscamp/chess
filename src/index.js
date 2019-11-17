import MoveFinder from "./game/moveFinding/moveFinder";
import MockBoardInterface from "./interface/mockBoardInterface";
import Game from "./game";
import findRookBaseMoves from "./game/moveFinding/findRookBaseMoves";

/**
 * This file initializes the application
 * Code written here will be executed when application loads
 */

console.log("...");

let moveFinder = new MoveFinder();

moveFinder.registerAlgorithm("pawn", findRookBaseMoves);
moveFinder.registerAlgorithm("rook", findRookBaseMoves);

const game = new Game(document.querySelector('#root'), MockBoardInterface, moveFinder, true);