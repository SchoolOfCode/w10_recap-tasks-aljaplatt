import React from "react";

function CommentSection({ name, text }) {
  return (
    <section>
      <h4>{name} says: </h4>
      <p>{text}</p>
    </section>
  );
}

export default CommentSection;
