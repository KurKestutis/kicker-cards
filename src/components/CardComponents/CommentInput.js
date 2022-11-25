import React from "react";
import "./CommentInput.scss";

const CommentImput = () => {
  return (
    <form className="comment-input">
      <input className="comment-input__field" type="text" placeholder="Placeholder..." />
      <input className="comment-input__btn" type="submit" value="submit" />
    </form>
  );
};

export default CommentImput;
