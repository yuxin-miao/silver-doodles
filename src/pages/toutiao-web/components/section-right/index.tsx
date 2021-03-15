import React from "react";
import './index.css';

import { SectionLogin } from './components/login-part';

export const SectionRight: React.FC = () => {
  const about_list = [
    '关于头条',
    '加入头条',
    '媒体报道',
    '媒体合作',
    '产品合作',
    '合作说明',
    '广告投放',
    '联系我们',
    '用户协议',
    '隐私政策',
    '侵权投诉',
    '廉洁举报',
    '企业认证',
    '肺炎求助',
    '辟谣专区',
  ];
  const site_list = [
    '光明网',
    '央广网',
    '国际在线',
    '中国西藏网',
    '参考消息',
    '环球网',
    '中青在线',
    '中青网',
    '中工网',
    '海外网',
    '中国网',
    '未来网',
    '千龙网',
    '新京报',
    '北青网',
    '法制晚报',
    '北京晨报',
    '北京商报',
    '北京娱乐',
    '信报',
    '奥一网',
    '金羊网',
    '华商网',
    '新民网',
    '红网',
    '中国江苏网',
  ];
  return (
    <div className="toutiao-right">
      <div className="search-part">
        <input className="search-input" type="text" placeholder="搜索站内资讯、视频或用户"/>
        <button className="search-button">搜索</button>
      </div>
      <div className="login-wrapper">
        <SectionLogin />
      </div>
      <div className="pane-module">
        <div className="module-head">
          更多
        </div>
        <ul className="links-wrapper">
          {about_list.map((item, _index) => {
            return (
              <li className="links-item">
                <a href="www.baidu.com"> 
                {item}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="pane-module">
        <div className="module-head">
            友情链接
        </div>
        <ul className="links-wrapper">
          {site_list.map((item, _index) => {
            return (
              <li className="links-item">
                <a href="www.baidu.com"> 
                {item}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}