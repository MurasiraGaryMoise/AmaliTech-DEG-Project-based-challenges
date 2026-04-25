import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [recentFiles, setRecentFiles] = useState([])

  const fetchData = async () => {
    const res = await fetch('/data.json')
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFileSelect = (file) => {
    setSelectedFile(file)
    setRecentFiles(prev => {
      const filtered = prev.filter(f => f.id !== file.id)
      return [file, ...filtered].slice(0, 5)
    })
  }

  return (
    <div className="app">
      <Topbar />
      <div className="workspace">
        <Sidebar data={data} onFileSelect={handleFileSelect} />
        <MainPanel selectedFile={selectedFile} recentFiles={recentFiles} onFileSelect={handleFileSelect} />
      </div>
      <Footer />
    </div>
  )
}

export default App
