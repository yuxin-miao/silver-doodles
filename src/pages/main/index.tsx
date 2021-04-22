import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
const Main: React.FC = () => {
  return (
    <>
    <header>
      <h1>Test Page</h1>
    </header>
    <div id="main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">头条首页</Link>
          </li>
          <li>
            <Link to="/todo">TODO</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorial</Link>
          </li>
        </ul>
      </nav>
      <aside>aside</aside>
      <article />
      </div>
    <footer> Footer </footer>
    </>
  )
}

export default Main;