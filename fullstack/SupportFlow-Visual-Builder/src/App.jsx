import './App.css'
import Navbar from './components/Navbar/Navbar'
import Canvas from './components/Canvas/Canvas'
import EditPanel from './components/EditPanel/EditPanel'
import PreviewChat from './components/PreviewChat/PreviewChat'
import AddNodeModal from './components/AddNodeModal/AddNodeModal'
import flowData from '../flow_data.json'

const mockSelectedNode = flowData.nodes[1]
const isPreviewMode = false
const showAddNodeModal = true

function App() {
  return (
    <div className="app-container">
      <Navbar
        isPreviewMode={isPreviewMode}
        onToggleMode={() => {}}
        onAddNode={() => {}}
      />
      <div className="app-body">
        {isPreviewMode ? (
          <PreviewChat onStop={() => {}} />
        ) : (
          <>
            <Canvas
              nodes={flowData.nodes}
              onNodeClick={() => {}}
              onNodeDelete={() => {}}
            />
            <EditPanel
              node={mockSelectedNode}
              onClose={() => {}}
              onTextChange={() => {}}
            />
          </>
        )}
      </div>

      {showAddNodeModal && (
        <AddNodeModal
          onClose={() => {}}
          onAddNode={() => {}}
        />
      )}
    </div>
  )
}

export default App
