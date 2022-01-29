import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Header from "../Header/Header";
import css from "./App.module.css";

function App() {
  return (
    <div>
      <Header title={"Wiki"} sub={"Pigeon"} />
      <main className={css.app}>
        <ArticleContainer />
      </main>
    </div>
  );
}

export default App;
