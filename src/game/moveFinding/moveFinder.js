/**
 * A simple class that invokes appropriate move-finding algorithms
 * but doesn't perform all necessary checks if provvided data is correct
 */
export default class MoveFinder {
    constructor() {
        this._registeredMoveFindingAlgorithms = {};
    }

    findMoves(pieceType, situation, coordinates, pieceColor) {
        const aggregator = [];

        //pick appropriate algorithm group
        const algorithms = this._registeredMoveFindingAlgorithms[pieceType];
        if (algorithms === undefined) throw new Error(`No matching algorithms found for ${pieceType}`);

        //iterate through algorithms, adding found moves from each of them
        if (algorithms.length) {
            for (let i = 0; i < algorithms.length; i++) {
                let moves = algorithms[i](situation, coordinates, pieceColor);
                aggregator.push(...moves);
            }
        }

        //remove duplicates
        this._makeUnique(aggregator);

        return aggregator;
    }

    registerAlgorithm(key, algorithm) {
        if (typeof key !== "string") throw new TypeError("Algorithm key needs to be a string");
        if (this._registeredMoveFindingAlgorithms[key] === undefined) {
            this._registeredMoveFindingAlgorithms[key] = [];
        }
        this._registeredMoveFindingAlgorithms[key].push(algorithm);
    }

    _makeUnique(coordsArray) {
        for (let i = 0; i < coordsArray.length; i++) {
            for (let j = i + 1; j < coordsArray.length; j++) {
                if (coordsArray[i].x === coordsArray[j].x && coordsArray[i].y === coordsArray[j].y) {
                    coordsArray.splice(j--, 1);
                }
            }
        }
    }
}