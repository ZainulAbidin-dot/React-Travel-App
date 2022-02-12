import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import posts from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Home post={posts} />
      </header>
    </div>
  );
}

export default App;
