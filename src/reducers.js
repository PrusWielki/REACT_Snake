import {Board,DisplayBoard,CreateBoard} from './board'
const rootReducer = function (state = {boardsize: 10, board : Board(DisplayBoard(CreateBoard(10,{x:0,y:0}))), snakepos :{x:0,y:0}}, action) {
    switch (action.type) {
      case 'UP':
        if(state.snakepos.x-1>=0)
        return {...state,board:Board(DisplayBoard(CreateBoard(10,{x: state.snakepos.x-1,y: state.snakepos.y}))),snakepos: {x: state.snakepos.x-1,y: state.snakepos.y}}
        else
        return state
      case 'DOWN':
        console.log(state.snakepos.x);
        console.log(state.snakepos.y);
        if(state.snakepos.x+1<state.boardsize)
        return {...state,board:Board(DisplayBoard(CreateBoard(10,{x: state.snakepos.x+1,y: state.snakepos.y}))),snakepos: {x: state.snakepos.x+1,y: state.snakepos.y}}
        else
        return state;
        case 'LEFT':
        if(state.snakepos.y-1>=0)
        return {...state,board:Board(DisplayBoard(CreateBoard(10,{x: state.snakepos.x,y: state.snakepos.y-1}))),snakepos: {x: state.snakepos.x,y: state.snakepos.y-1}}
        else
        return state;
        case 'RIGHT':
        if(state.snakepos.y+1<state.boardsize)
        return {...state,board:Board(DisplayBoard(CreateBoard(10,{x: state.snakepos.x,y: state.snakepos.y+1}))),snakepos: {x: state.snakepos.x,y: state.snakepos.y+1}}

        else
        return state;
        default:
        return state;
    }
  };
  
  export default rootReducer;