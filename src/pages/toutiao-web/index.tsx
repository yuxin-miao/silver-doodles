import React from 'react';
import './index.css';
import { SectionHeader } from './components/section-header';

export function ToutiaoWeb() {
  return (
   <div className="toutiao-web">
      <div className="top-header">
        <SectionHeader />
      </div>
      <div className="main-content">
        <div className="center"></div>
        <div className="left"> </div>
        <div className="right"> </div>
      </div>
   </div>  
  )
}