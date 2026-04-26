import './EditPanel.css'

function EditPanel({ node, onClose, onTextChange }) {
  if (!node) return null

  return (
    <aside className="edit-panel">

      <div className="edit-panel-header">
        <h2 className="edit-panel-title">Edit Node</h2>
        <button className="edit-panel-close-button" onClick={onClose}>×</button>
      </div>

      <div className="edit-panel-body">

        <span className={`edit-panel-type-badge edit-panel-type-badge--${node.type}`}>
          {node.type}
        </span>

        <div className="edit-panel-field">
          <label className="edit-panel-label">Question Text</label>
          <textarea
            className="edit-panel-textarea"
            value={node.text}
            onChange={(event) => onTextChange(node.id, event.target.value)}
            rows={4}
          />
        </div>

        {node.options.length > 0 && (
          <div className="edit-panel-field">
            <label className="edit-panel-label">Answer Options</label>
            <div className="edit-panel-options">
              {node.options.map((option, index) => (
                <div key={index} className="edit-panel-option">
                  <span className="edit-panel-option-label">{option.label}</span>
                  <span className="edit-panel-option-arrow">→ Node {option.nextId}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {node.options.length === 0 && (
          <p className="edit-panel-end-note">This is an end node — the conversation stops here.</p>
        )}

      </div>

    </aside>
  )
}

export default EditPanel
