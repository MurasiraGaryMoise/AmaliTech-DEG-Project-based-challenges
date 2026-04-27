import { useState } from 'react'
import './AddNodeModal.css'

function AddNodeModal({ onClose, onAddNode, nodes }) {
  const [nodeType, setNodeType] = useState('question')
  const [nodeText, setNodeText] = useState('')
  const [parentNodeId, setParentNodeId] = useState('')
  const [optionLabel, setOptionLabel] = useState('')

  const connectableNodes = nodes.filter((node) => node.type !== 'end')

  const isFormValid = nodeText.trim() && parentNodeId && optionLabel.trim()

  function handleSubmit() {
    if (!isFormValid) return
    onAddNode(nodeType, nodeText.trim(), parentNodeId, optionLabel.trim())
  }

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
            <select
              className="modal-select"
              value={nodeType}
              onChange={(event) => setNodeType(event.target.value)}
            >
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
              value={nodeText}
              onChange={(event) => setNodeText(event.target.value)}
            />
          </div>

          <div className="modal-field">
            <label className="modal-label">Connect From</label>
            <select
              className="modal-select"
              value={parentNodeId}
              onChange={(event) => setParentNodeId(event.target.value)}
            >
              <option value="">Select a parent node...</option>
              {connectableNodes.map((node) => (
                <option key={node.id} value={node.id}>
                  {node.text.length > 40 ? node.text.slice(0, 40) + '...' : node.text}
                </option>
              ))}
            </select>
          </div>

          <div className="modal-field">
            <label className="modal-label">Answer Option Label</label>
            <input
              className="modal-input"
              type="text"
              placeholder="e.g. Yes, I have tried that"
              value={optionLabel}
              onChange={(event) => setOptionLabel(event.target.value)}
            />
          </div>

        </div>

        <div className="modal-footer">
          <button className="modal-cancel-button" onClick={onClose}>Cancel</button>
          <button
            className="modal-submit-button"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Add Node
          </button>
        </div>

      </div>

    </div>
  )
}

export default AddNodeModal
