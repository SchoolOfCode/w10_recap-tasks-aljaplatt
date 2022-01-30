import React from "react";
import Header from "../Header/Header";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./WikiPigeon.module.css";

const WikiPigeon = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Header title={"Wiki"} sub={"Pigeon"} />

        <main className={css.app}>
          <ArticleContainer />
        </main>
        <Footer />
      </div>
    )
  );
};

export default WikiPigeon;
