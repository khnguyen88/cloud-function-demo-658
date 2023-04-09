import './App.css';
import CloudFunction from './components/CloudFunction/CloudFunction';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div>
          Welcome to the Dad Zone!!! 
        </div>
        <div>
          (❍ᴥ❍ʋ)
        </div>
      </header>
      <main className="app-main"> 
        <CloudFunction/>
      </main>       
      <footer className="app-footer">
          &#169; Big Poppa Inc., 2023.
      </footer>
    </div>
  );
}

export default App;
