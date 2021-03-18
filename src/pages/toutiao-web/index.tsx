import React from 'react';
import './index.css';
import { SectionHeader } from './components/section-header';
import { SectionNav } from './components/section-nav';
import { SectionRight } from './components/section-right';
import { SectionFeed } from './components/section-feed';

export function ToutiaoWeb() {
  return (
   <div className="toutiao-web">
      <div className="top-header">
        <SectionHeader />
      </div>
      <div className="main-content">
        <nav className="left">
          <SectionNav />
        </nav>
        <main className="center">
          <SectionFeed />
        </main>
        <aside className="right"> 
          <SectionRight/>
        </aside>
      </div>
   </div>  
  )
}