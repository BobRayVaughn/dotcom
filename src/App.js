import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <header className="App-header">
      <NavProvider>
				<Nav />
				<Main />
			</NavProvider>
      </header>
    </div>
  );
}

export default App;