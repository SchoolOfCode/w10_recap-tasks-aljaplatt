import React from "react";
import css from "./CommentSection.module.css";

function CommentSection({ name, text }) {
  return (
    <section>
      <h4 className={css.title}>{name} says: </h4>
      <p className={css.text}>{text}</p>
    </section>
  );
}

export default CommentSection;
