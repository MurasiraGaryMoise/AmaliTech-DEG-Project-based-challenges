import './AddNodeModal.css'

function AddNodeModal({ onClose, onAddNode }) {
  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal" onClick={(event) => event.stopPropagation()}>

        <div className="modal-header">
          <h2 className="modal-title">Add New Node</h2>
          <button className="modal-close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">

          <div className="modal-field">
            <label className="modal-label">Node Type</label>
            <select className="modal-select">
              <option value="question">Question</option>
              <option value="end">End</option>
            </select>
          </div>

          <div className="modal-field">
            <label className="modal-label">Question Text</label>
            <textarea
              className="modal-textarea"
              placeholder="e.g. Have you contacted us before?"
              rows={3}
            />
          </div>

        </div>

        <div className="modal-footer">
          <button className="modal-cancel-button" onClick={onClose}>Cancel</button>
          <button className="modal-submit-button" onClick={onAddNode}>Add Node</button>
        </div>

      </div>

    </div>
  )
}

export default AddNodeModal
