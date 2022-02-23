import empty_square from './square.png'
import snake from './snake.png'

export function CreateBoard(boardSize,snakepos){
    let rows=[];
    for(let i=0;i<boardSize;i++){
        rows.push([]);
        for(let j=0;j<boardSize;j++){
            if(i==snakepos.x&&j==snakepos.y)
            rows[i].push('snake')
            else
            rows[i].push('empty')
        }
    }
    
    return rows;
}
export function DisplayBoard(board){
    console.log(board[0]);
return board.map(row=>
    <div>
        {row.map(x=>{switch(x){case 'empty':return <img src={empty_square}/>
    case 'snake': return <img src={snake}/>}})}
        </div>)


}
export function Board(displayBoard){
    return(
        <div>
        {displayBoard}
        </div>
    )
}