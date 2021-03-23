import React from "react";
import { FeedNews } from "../../types";
import { newsType, mediaType } from '../../types/enum'
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
            {newsType[item.news_type]}
          </div>
          <div className="footer-text-box">
            <div className="footer-text">{mediaType[item.media]} ·</div>
          </div>
          <div className="footer-text-box">
            <div className="footer-text">{item.commit_num}评论数 ·</div>
          </div>
          <div className="footer-text-box">
            <div className="footer-text">{item.time}</div>
          </div>
        </div>
      </div>
    );
  };
  const PicBox = (item: FeedNews) => {
    return (
      <div className="pic-mode">
        <div className="pic-left-box">
          
        </div>
        <div className="pic-right-box">
          <div className="title-box">
            {item.title}
          </div>
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