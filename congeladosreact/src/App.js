import logo from './logo.svg';
import './App.css';

function App() {
  const [linea1, setLinea1] = useState('')
  return (
    <div className="App">
      <select>
        <option value="valor 1">Primer meme</option>
        <option value="valor 2">Segundo meme</option>
        <option value="valor 3">Tercer meme</option>
        <option value="valor 4">Cuarto valor</option>
      </select> <br />

      <input type="text" placeholder="linea 1"><br />
      <input type="text" placeholder="linea 2"><br />
      <button>Exportar</button>

      <div> 
        <span>Linea 1</span>
        <span>Linea 2</span>

        <img src=""></img>
      </div>
    </div>
  );
}

export default App;
