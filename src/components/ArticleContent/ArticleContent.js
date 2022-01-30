import React from "react";
import css from "./Article.module.css";
import { Button } from "@chakra-ui/react";

function ArticleContent({ title, text }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {text.map((p) => (
        <p className={css.text} key={p.id}>
          {p.text}
        </p>
      ))}
      <Button className={css.btn} colorScheme="teal" variant="solid">
        Like 👍
      </Button>
    </section>
  );
}

export default ArticleContent;
