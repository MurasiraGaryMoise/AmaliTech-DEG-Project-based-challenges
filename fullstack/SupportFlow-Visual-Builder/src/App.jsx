import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="app-container">
      <Navbar
        isPreviewMode={false}
        onToggleMode={() => {}}
        onAddNode={() => {}}
      />
      <div className="app-body">
      </div>
    </div>
  )
}

export default App
