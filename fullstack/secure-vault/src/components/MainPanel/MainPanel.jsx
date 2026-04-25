import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import './MainPanel.css'

function MainPanel({ selectedFile, recentFiles }) {
  return (
    <main className="main-panel">
      <Breadcrumb />
      <PropertiesPanel file={selectedFile} recentFiles={recentFiles} />
    </main>
  )
}

export default MainPanel
