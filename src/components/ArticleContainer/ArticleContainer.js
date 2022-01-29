import React from "react";
import articles from "../../libs/articles";
import ArticleContent from "../ArticleContent/ArticleContent";
import CommentSection from "../CommentSection/CommentSection";
import LogoutButton from "../LogOutButton/LogOutButton";
import css from "./ArticleContainer.module.css";

function ArticleContainer() {
  return (
    <div>
      <LogoutButton />
      <section className={css.container}>
        <div>
          {articles.map((article, id) => {
            return (
              <div key={id}>
                <ArticleContent
                  key={article.id}
                  title={article.title}
                  text={article.paragraphs}
                />
                {article.comments.map((comment) => {
                  return (
                    <CommentSection
                      key={comment.id}
                      name={comment.name}
                      text={comment.text}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ArticleContainer;
