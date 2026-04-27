import { useRef } from 'react'
import './Canvas.css'
import NodeCard from '../NodeCard/NodeCard'
import SvgConnectors from '../SvgConnectors/SvgConnectors'

function Canvas({ nodes, onNodeClick }) {
  const nodeRefs = useRef({})

  function registerNodeRef(nodeId, element) {
    nodeRefs.current[nodeId] = element
  }

  return (
    <div className="canvas-wrapper">
      <div className="canvas">
        <SvgConnectors nodes={nodes} nodeRefs={nodeRefs} />
        {nodes.map((node) => (
          <NodeCard
            key={node.id}
            node={node}
            onNodeClick={onNodeClick}
            onRefReady={registerNodeRef}
          />
        ))}
      </div>
    </div>
  )
}

export default Canvas
