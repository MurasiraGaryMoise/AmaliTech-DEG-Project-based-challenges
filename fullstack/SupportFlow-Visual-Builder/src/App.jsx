import './App.css'
import Navbar from './components/Navbar/Navbar'
import Canvas from './components/Canvas/Canvas'
import flowData from '../flow_data.json'

function App() {
  return (
    <div className="app-container">
      <Navbar
        isPreviewMode={false}
        onToggleMode={() => {}}
        onAddNode={() => {}}
      />
      <div className="app-body">
        <Canvas
          nodes={flowData.nodes}
          onNodeClick={() => {}}
          onNodeDelete={() => {}}
        />
      </div>
    </div>
  )
}

export default App
