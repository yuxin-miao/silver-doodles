import React from "react";
import { FeedNews } from "../../types";
import './index.css';

export const SectionFeed: React.FC = () => {
  const feed_list: FeedNews[] = [
    {
      title: "历史交汇期的宏伟擘画——从党的十九届五中全会到2021年全国两会",
      mode_type: 0,
      news_type: 0,
      media: 0,
      commit_num: 786,
      time: "1小时前",
    },
    {
      title: "众人植树树成林",
      mode_type: 0,
      news_type: 0,
      media: 0,
      commit_num: 786,
      time: "1小时前",
    },
  ];
  const PlainBox = (item: FeedNews) => {
    return (
      <div className="plain-mode">
        <div className="title-box">
          {item.title}
        </div>
        <div className="footer-bar">
          <div className="footer-tag">
            
          </div>
        </div>
      </div>
    );
  };
  const PicBox = (item: FeedNews) => {
    return (
      <div className="pic-mode">
        <div className="title-box">
          {item.title}
        </div>
      </div>
    )
  }
  return (
    <div className="toutiao-feed">
      <div className="feed-box">
        {feed_list.map((item, _idx) => {
          return (
            item.mode_type === 0 ? PlainBox(item) : PicBox(item)
          )
        })}
      </div>
    </div>
  )
}