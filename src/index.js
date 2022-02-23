import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Board,DisplayBoard,CreateBoard} from './board'
//import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools()

);
const mapStateToProps = state => {
  return {
    board: state
  };
};

const handleKeyPress=(e)=>{
console.log(e.key)
switch(e.key){
  case 'ArrowDown':
    store.dispatch({type: 'DOWN'});
    break;
  case 'ArrowUp':
    store.dispatch({type: 'UP'});
    break;
  case 'ArrowLeft':
    store.dispatch({type: 'LEFT'});
    break;
  case 'ArrowRight':
    store.dispatch({type: 'RIGHT'});
    break;
}


}

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};


   document.addEventListener('keydown', handleKeyPress);
const Component = ({board}) => <div><h1>{board.board}</h1></div>;//<h1>{Board(DisplayBoard(CreateBoard(10)))}</h1>

const Container = connect(mapStateToProps,{handleKeyPress})(Component);


const App = () => (
  <Provider store={store}>
    <Container></Container>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
/* ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
 */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
