import { useRef, useLayoutEffect } from 'react'
import './NodeCard.css'

function NodeCard({ node, onNodeClick, onRefReady }) {
  const cardRef = useRef(null)

  useLayoutEffect(() => {
    onRefReady(node.id, cardRef.current)
    return () => {
      onRefReady(node.id, null)
    }
  }, [node.id])

  return (
    <div
      ref={cardRef}
      className={`node-card node-card--${node.type}`}
      style={{ left: node.position.x, top: node.position.y }}
      onClick={() => onNodeClick(node)}
    >

      <div className="node-card-header">
        <span className="node-card-type-badge">{node.type}</span>
      </div>

      <p className="node-card-text">{node.text}</p>

      {node.options.length > 0 && (
        <div className="node-card-options">
          {node.options.map((option, index) => (
            <div key={index} className="node-card-option">
              {option.label}
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default NodeCard
