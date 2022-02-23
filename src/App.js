import logo from './logo.svg';
import './App.css';
import {Board,DisplayBoard,CreateBoard} from './board'
function App(props) {
  let board=Board(DisplayBoard(CreateBoard(10)));

  
  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
