import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Canvas from './components/Canvas/Canvas'
import EditPanel from './components/EditPanel/EditPanel'
import PreviewChat from './components/PreviewChat/PreviewChat'
import AddNodeModal from './components/AddNodeModal/AddNodeModal'
import flowData from '../flow_data.json'

function App() {
  const [nodes, setNodes] = useState(flowData.nodes)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [selectedNodeId, setSelectedNodeId] = useState(null)
  const [showAddNodeModal, setShowAddNodeModal] = useState(false)

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) ?? null

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

  function handleNodeDelete(nodeId) {
    setNodes((previousNodes) => previousNodes.filter((node) => node.id !== nodeId))
    if (selectedNodeId === nodeId) setSelectedNodeId(null)
  }

  function handleAddNode(nodeType, nodeText) {
    const newNode = {
      id: String(Date.now()),
      type: nodeType,
      text: nodeText,
      position: { x: 150, y: 680 },
      options: [],
    }
    setNodes((previousNodes) => [...previousNodes, newNode])
    setShowAddNodeModal(false)
  }

  return (
    <div className="app-container">
      <Navbar
        isPreviewMode={isPreviewMode}
        onToggleMode={handleToggleMode}
        onAddNode={() => setShowAddNodeModal(true)}
      />
      <div className="app-body">
        {isPreviewMode ? (
          <PreviewChat nodes={nodes} onStop={handleToggleMode} />
        ) : (
          <>
            <Canvas
              nodes={nodes}
              onNodeClick={handleNodeClick}
              onNodeDelete={handleNodeDelete}
            />
            <EditPanel
              node={selectedNode}
              onClose={handleCloseEditPanel}
              onTextChange={handleTextChange}
            />
          </>
        )}
      </div>

      {showAddNodeModal && (
        <AddNodeModal
          onClose={() => setShowAddNodeModal(false)}
          onAddNode={handleAddNode}
        />
      )}
    </div>
  )
}

export default App
