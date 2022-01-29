import React from "react";

function ArticleContent({ title, paragraphs }) {
  return (
    <section>
      <h2>{title}</h2>
      {paragraphs.map((p) => (
        <p key={p.id}>{p.text}</p>
      ))}
      <button>Like 👍</button>
    </section>
  );
}

export default ArticleContent;
