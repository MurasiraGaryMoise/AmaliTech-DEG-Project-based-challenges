import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="workspace">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
