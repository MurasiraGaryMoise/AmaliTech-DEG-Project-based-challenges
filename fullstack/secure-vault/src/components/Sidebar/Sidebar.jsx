import { useEffect, useState } from 'react';
import './Sidebar.css'

function Sidebar( { data } ) {

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__title">File Explorer</span>
        <div className="search-bar">
          <svg className="search-bar__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="sidebar__tree">
        {/* Tree will go here */}
        
      </div>
    </aside>
  )
}

export default Sidebar
