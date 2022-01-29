import React from "react";
import articles from "../../libs/articles";
import ArticleContent from "../ArticleContent/ArticleContent";
import CommentSection from "../CommentSection/CommentSection";

function ArticleContainer() {
  return (
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
  );
}

export default ArticleContainer;
