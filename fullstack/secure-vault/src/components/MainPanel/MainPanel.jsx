import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import './MainPanel.css'

function MainPanel() {
  return (
    <main className="main-panel">
      <Breadcrumb />
      <PropertiesPanel />
    </main>
  )
}

export default MainPanel
