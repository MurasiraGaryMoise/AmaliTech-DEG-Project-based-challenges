import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import './MainPanel.css'

function MainPanel({ selectedFile, recentFiles, onFileSelect }) {
  return (
    <main className="main-panel">
      <PropertiesPanel file={selectedFile} recentFiles={recentFiles} onFileSelect={onFileSelect} />
    </main>
  )
}

export default MainPanel
