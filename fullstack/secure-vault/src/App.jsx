import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="workspace">
        <Sidebar />
        <MainPanel />
      </div>
      <Footer />
    </div>
  )
}

export default App
