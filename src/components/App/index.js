import "./App.css";
import articles from "../../libs/articles";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

function App() {
  return (
    <main className="App">
      <h1>WikiPigeon</h1>
      <ArticleContainer />
    </main>
  );
}

export default App;
