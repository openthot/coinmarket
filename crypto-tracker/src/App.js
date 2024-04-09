import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
async function fetchNews() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/news?query=crypto&order_by=published_at&sort=desc&locale=en&limit=10');
    // Rest of the code
  } catch (error) {
    // Rest of the error handling code
  }
}