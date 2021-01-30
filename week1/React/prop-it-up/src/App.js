import './App.css';
import Props from './components/Props';

function App() {
  return (
    <div className="App">
      <Props lastname="Doe" firstname="Jane" age={45} haircolor="Black"/>
      <Props lastname="Doe" firstname="Jane" age={30} haircolor="Black"/>
      <Props lastname="Doe" firstname="Jane" age={24} haircolor="Black"/>
    </div>
  );
}

export default App;