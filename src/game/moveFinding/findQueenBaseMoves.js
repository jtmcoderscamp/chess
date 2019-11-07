import findBishopBaseMoves from "./findBishopBaseMoves";
import findRookBaseMoves from "./findRookBaseMoves";

export default function findQueenBaseMoves(boardSituation, startingCoordinates, color) {
    //TODO: implement this properly once the dependencies are completed.
    return [...findBishopBaseMoves(), ...findRookBaseMoves()];
}