import React from "react";
import articles from "../../libs/articles";
import ArticleContent from "../ArticleContent/ArticleContent";
import CommentSection from "../CommentSection/CommentSection";

function ArticleContainer() {
  return (
    <div>
      {articles.map((article, i) => {
        return (
          <div key={i}>
            <ArticleContent
              key={article.id}
              title={article.title}
              paragraphs={article.paragraphs}
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
