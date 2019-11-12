class ChessPiece {

    static get PIECE_TYPES() {
        return ["pawn", "king", "queen", "bishop", "rook", "knight"];
    }
    
    static get PIECE_COLORS() {
        return ["white", "black"];
    }

    constructor(pieceType, color) {
        const avalaiblePieceTypes = ChessPiece.PIECE_TYPES;
        const avalaibleColors = ChessPiece.PIECE_COLORS;
        if (avalaibleColors.indexOf(color) === -1) {
            throw new Error(
              "Invalid color. Could not create chess piece with color " + color,
            );
        }
        if (avalaiblePieceTypes.indexOf(pieceType) === -1) {
            throw new Error(
              "Invalid piece type. Could not create chess piece of type " + pieceType,
            );
        }
        this.pieceType = pieceType;
        this.color = color;
    }
}

export default ChessPiece;


  