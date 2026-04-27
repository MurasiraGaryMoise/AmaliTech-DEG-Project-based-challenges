import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Canvas from './components/Canvas/Canvas'
import EditPanel from './components/EditPanel/EditPanel'
import PreviewChat from './components/PreviewChat/PreviewChat'
import flowData from '../flow_data.json'

function App() {
  const [nodes, setNodes] = useState(flowData.nodes)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [selectedNodeId, setSelectedNodeId] = useState(null)

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? null
  const hasChanges = JSON.stringify(nodes) !== JSON.stringify(flowData.nodes)

  function handleToggleMode() {
    setIsPreviewMode((previous) => !previous)
    setSelectedNodeId(null)
  }

  function handleNodeClick(node) {
    setSelectedNodeId(node.id)
  }

  function handleCloseEditPanel() {
    setSelectedNodeId(null)
  }

  function handleTextChange(nodeId, newText) {
    setNodes((previousNodes) =>
      previousNodes.map((node) =>
        node.id === nodeId ? { ...node, text: newText } : node
      )
    )
  }

  function handleExport() {
    const fileContent = JSON.stringify({ meta: flowData.meta, nodes }, null, 2)
    const blob = new Blob([fileContent], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'flow_data.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="app-container">
      <Navbar
        isPreviewMode={isPreviewMode}
        onToggleMode={handleToggleMode}
        hasChanges={hasChanges}
        onExport={handleExport}
      />
      <div className="app-body">
        {isPreviewMode ? (
          <PreviewChat nodes={nodes} onStop={handleToggleMode} />
        ) : (
          <>
            <Canvas
              nodes={nodes}
              onNodeClick={handleNodeClick}
            />
            <EditPanel
              node={selectedNode}
              onClose={handleCloseEditPanel}
              onTextChange={handleTextChange}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App
