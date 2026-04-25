import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainPanel from './components/MainPanel/MainPanel'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);

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
        <Sidebar data={data}/>
        <MainPanel />
      </div>
      <Footer />
    </div>
  )
}

export default App
