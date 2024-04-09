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
const coinId = 'bitcoin';
const apiUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const name = data.name;
    const symbol = data.symbol;
    const price = data.market_data.current_price.usd;
    const marketCap = data.market_data.market_cap.usd;
    const volume = data.market_data.total_volume.usd;

    document.getElementById('coin-name').textContent = name;
    document.getElementById('coin-symbol').textContent = symbol;
    document.getElementById('coin-price').textContent = `$${price.toFixed(2)}`;
    document.getElementById('coin-market-cap').textContent = `$${marketCap.toFixed(2)}`;
    document.getElementById('coin-volume').textContent = `$${volume.toFixed(2)}`;
  })
  .catch(error => console.error(error));