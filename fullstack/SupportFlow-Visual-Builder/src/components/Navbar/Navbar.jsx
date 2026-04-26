import './Navbar.css'

function Navbar({ isPreviewMode, onToggleMode, onAddNode }) {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <div className="navbar-logo-icon">◈</div>
        <span className="navbar-logo-text">SupportFlow</span>
      </div>

      <div className="navbar-actions">
        {!isPreviewMode && (
          <button className="navbar-add-button" onClick={onAddNode}>
            + Add Node
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
