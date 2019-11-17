import InterfaceBoard from "./importedBoardInterface/InterfaceBoard";

export default class MockBoardInterface {
    constructor(parentNode, onFieldClick) {
        this.otherChessBoard = new InterfaceBoard(parentNode, onFieldClick);
    }

    highlightFields(coordsArray) {
        this.otherChessBoard.highlightFields(coordsArray);
    }

    clearHighlights() {
        this.otherChessBoard.clearHighlights();
    }

    setPosition(position, fullReset) {
        this.otherChessBoard.setPosition(position, fullReset);
    }
}