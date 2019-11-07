import findBishopBaseMoves from "./findBishopBaseMoves";
import findRookBaseMoves from "./findRookBaseMoves";

export default function findQueenBaseMoves(boardSituation, startingCoordinates, color) {
    return [...findBishopBaseMoves(), ...findRookBaseMoves()];
}