import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Leases</h2>
        <button>Add Lease</button>
      </header>
      <main className="App-main">
        <div className="Table-header">
          <input type="text" placeholder="Search" />
          <button>Export</button>
        </div>
      </main>
    </div>
  );
}

export default App;
