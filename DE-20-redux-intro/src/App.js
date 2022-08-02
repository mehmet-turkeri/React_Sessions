import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

import { Provider } from 'react-redux';

  import { legacy_createStore as createStore, combineReducers } from 'redux';
  import counterReducerComp from "./redux/reducers/counterReducerComp"
  import todoReducerComp from './redux/reducers/todoReducersComp';
function App() {



 
  return (
    <div className="app">
        <Counter  />
        <Todo />
     
    </div>
  );
}

export default App;
