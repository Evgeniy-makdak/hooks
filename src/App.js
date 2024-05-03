import './App.css';
import './styles/reset.css'
import './styles/counter.css'
import './styles/input.css'
import Counter from './components/Counter';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
    </div>
  );
}

export default App;
