class ChessPiece {

    static getFigureTypes() {
        return ["pawn", "king", "queen", "tower", "bishop", "rook"];
    }
    
    static getColors() {
        return ["white", "black"];
    }

    constructor(pieceType, color) {
        const avalaibleFigures = ChessPiece.getFigureTypes();
        const avalaibleColors = ChessPiece.getColors();
        if (avalaibleColors.indexOf(color) === -1) {
            throw new Error(
              "Color bad!!! Could not create figure with color " + color,
            );
        }
        if (avalaibleFigures.indexOf(pieceType) === -1) {
            throw new Error(
              "Figure type bad!!! Could not create figure of type " + pieceType,
            );
        }
        this.pieceType = pieceType;
        this.color = color;
    }
}

export default ChessPiece;

  