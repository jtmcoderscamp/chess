import BoardCoordinates from "../board/boardCoordinates";

export default function findRookBaseMoves(boardSituation, startingCoordinates, color) {
    const b = [...checkMovesVertical(boardSituation, startingCoordinates, color), 
            ...checkMovesHorizontal(boardSituation, startingCoordinates, color)]; //makes one array of possible moves
    return b;   //returns this array
}


function checkMovesHorizontal (boardSituation, startingCoordinates, pieceColor){
    let x = startingCoordinates.x-1; //x position currently being checked
    let movesHorizontal=[]; //array of possible moves
    while(x>=0)  //check current row from piece position to left edge, stop upon finding another piece
    {
        let posValue = boardSituation[startingCoordinates.y][x];
        if(posValue == null)
            movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
        else
        {   //if you can capture piece, it is a possible move
            if(posValue.color!=pieceColor)
                movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
            break;
        }
        x--;     
    }
    x=startingCoordinates.x+1;
    while(x<8) //check current row from piece position to right edge, stop upon finding another piece
    {
        let posValue = boardSituation[startingCoordinates.y][x];
        if( posValue == null)
            movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
        else
        {
            if(posValue.color!=pieceColor)
                movesHorizontal.push(new BoardCoordinates(x,startingCoordinates.y));
            break;
        }
        x++;
    }
    return movesHorizontal;
}

function checkMovesVertical(boardSituation, startingCoordinates, pieceColor){
    let y=startingCoordinates.y-1;
    let movesVertical=[]; 
    
    while(y>=0) //check current column from piece position to bottom edge, stop upon finding another piece
    {
        let posValue = boardSituation[y][startingCoordinates.x];
        if(posValue == null)
            movesVertical.push(new BoardCoordinates(startingCoordinates.x, y));
        else
        {  
            if(posValue.color != pieceColor)
                movesVertical.push(new BoardCoordinates(startingCoordinates.x, y));
            break;
        }    
        y--;
    }
    y=startingCoordinates.y+1;
    while(y<8)  //check current column from piece position to top edge, stop upon finding another piece
    {
        let posValue = boardSituation[y][startingCoordinates.x];
        if(posValue == null)
            movesVertical.push(new BoardCoordinates (startingCoordinates.x, y));
        else
        {   
            if(posValue.color != pieceColor)
                movesVertical.push(new BoardCoordinates (startingCoordinates.x, y));
            break;
        }
        y++;
    }
    return movesVertical;
}