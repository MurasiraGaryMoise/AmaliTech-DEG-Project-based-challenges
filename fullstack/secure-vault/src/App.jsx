import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'
import './App.css'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="workspace">
        <Sidebar />
        <MainPanel />
      </div>
    </div>
  )
}

export default App
