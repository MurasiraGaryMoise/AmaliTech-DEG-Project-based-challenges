import './Canvas.css'
import NodeCard from '../NodeCard/NodeCard'

function Canvas({ nodes, onNodeClick, onNodeDelete }) {
  return (
    <div className="canvas-wrapper">
      <div className="canvas">
        {nodes.map((node) => (
          <NodeCard
            key={node.id}
            node={node}
            onNodeClick={onNodeClick}
            onNodeDelete={onNodeDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default Canvas
