import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react';
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel'

function App() {
    const [data, setData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null); //properties section

  const fetchData = async () => {
    const res = await fetch('/data.json')
    const data = await res.json();
    setData(data);
  }

  useEffect(()=>{
    fetchData();
  },[])

  console.log(data)
  return (
    <div className="app">
      <Topbar />
      <div className="workspace">
        <Sidebar data={data} onFileSelect={setSelectedFile}/>
        <MainPanel selectedFile={selectedFile}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
