import Breadcrumb from '../Breadcrumb/Breadcrumb'
import PropertiesPanel from '../PropertiesPanel/PropertiesPanel'
import './MainPanel.css'

function MainPanel( { selectedFile } ) {
  return (
    <main className="main-panel">
      <Breadcrumb />
      <PropertiesPanel file={selectedFile}/>
    </main>
  )
}

export default MainPanel
