import React from "react";

function ArticleContent({ title, text }) {
  return (
    <section>
      <h2>{title}</h2>
      {text.map((p) => (
        <p key={p.id}>{p.text}</p>
      ))}
      <button>Like 👍</button>
    </section>
  );
}

export default ArticleContent;
