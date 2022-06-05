import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoBar from "./components/InfoBar/InfoBar";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
        <InfoBar />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
