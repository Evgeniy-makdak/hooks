import './App.css';
import './styles/reset.css'
import './styles/counter.css'
import './styles/input.css'
import './styles/todo.css'
import Counter from './components/Counter';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Input /> */}
      <Todo />
    </div>
  );
}

export default App;
