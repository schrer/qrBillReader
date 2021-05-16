import logo from './logo.svg';
import './App.css';
import QrReaderComponent from './qr-reader/QrReader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QrReaderComponent></QrReaderComponent>
      </header>
    </div>
  );
}

export default App;
