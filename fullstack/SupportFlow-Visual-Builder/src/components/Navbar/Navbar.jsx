import './Navbar.css'

function Navbar({ isPreviewMode, onToggleMode, hasChanges, onExport }) {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <div className="navbar-logo-icon">◈</div>
        <span className="navbar-logo-text">SupportFlow</span>
      </div>

      <div className="navbar-actions">
        {!isPreviewMode && (
          <button
            className="navbar-export-button"
            onClick={onExport}
            disabled={!hasChanges}
          >
            Export
          </button>
        )}

        <span className="navbar-mode-badge">
          {isPreviewMode ? 'Preview' : 'Editing'}
        </span>

        <button className="navbar-play-button" onClick={onToggleMode}>
          {isPreviewMode ? '⏹ Stop' : '▶ Play'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar
