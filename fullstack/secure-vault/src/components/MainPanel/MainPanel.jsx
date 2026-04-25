import './MainPanel.css'

function MainPanel() {
  return (
    <main className="main-panel">
      {/* Breadcrumb will go here */}

      {/* Properties Panel will go here */}
      <div className="main-panel__empty">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
          <polyline points="13 2 13 9 20 9"/>
        </svg>
        <p>Select a file to view its details</p>
      </div>
    </main>
  )
}

export default MainPanel
