import React from "react";
import './index.css';

export const SectionLogin: React.FC = () => {

  return (
    <div className="login-part">
      <p className="login-msg">
        登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条
      </p>
      <div>
        <button className="login-button" type="button">登录</button>
      </div>
    </div>
  )
}