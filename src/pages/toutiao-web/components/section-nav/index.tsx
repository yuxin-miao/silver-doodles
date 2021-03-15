import React from "react";
import './index.css';
import logo from './assets/logo.png';

export const SectionNav: React.FC = () => {
  const navList = ['推荐', '西瓜视频', '热点', '直播', '图片', '科技', '娱乐', 
                    '游戏', '体育', '懂车帝', '财经', '数码', '更多'];
  return (
    <div className="toutiao-nav">
      <img className="nav-logo" src={logo} alt="logo"/>
      {navList.map((item, _index) => {
        return (
          <div className="nav-item">{item}</div>
        )
      })}
    </div>
  )
}