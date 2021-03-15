import React from "react";
import './index.css';

export const SectionHeader: React.FC = () => {
  return (
    <div className="header-content">
      <div className="header-part">
        <span className="right-border"> 下载APP</span>
        <span> 注册头条号 </span>
        <span> 上海 阴 8 / 16</span>
      </div>
      <div className="header-part"> 
        <span className="right-border"> 侵权投诉</span>
        <span> 头条产品 </span>
      </div>
    </div>
  )
}