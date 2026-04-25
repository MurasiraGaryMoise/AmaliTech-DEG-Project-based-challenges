import { VscFolder, VscFolderOpened, VscFile, VscChevronRight } from 'react-icons/vsc'
import './Sidebar.css'
import { useState } from 'react'

function Sidebar({ data }) {

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__title">File Explorer</span>
        <div className="search-bar">
          <svg className="search-bar__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="sidebar__tree">
        <ul style={{ listStyle: "none" }}>
          {data.map(root => (
            <Sub_folder sub_folder={root} key={root.id} />
            // <li key={root.id}>
            //   <span>
            //     {root.type === "folder" && <VscChevronRight />}
            //     {root.type === "folder" ? <VscFolder /> : <VscFile />}
            //     {root.name}
            //   </span>

            //   <ul style={{ paddingLeft: "30px", listStyle: "none" }}>
            //     {root.type === "folder" && root.children?.map(sub_folder => (
            //       <Sub_folder sub_folder={sub_folder} key={sub_folder.id} />
            //     ))}
            //   </ul>
            // </li>
          ))}
        </ul>

      </div>
    </aside>
  )
}


const Sub_folder = ({ sub_folder }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <li>
      <span onClick={toggleOpen} style={{ cursor: "pointer" }}>
        {sub_folder.type === "folder" && <VscChevronRight style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}/>}
        {sub_folder.type === "folder" ? <VscFolder /> : <VscFile />}
        {sub_folder.name}
      </span>

      {sub_folder.type === "folder" && isOpen && (
        <ul style={{ paddingLeft: "30px", listStyle: "none" }}>
          {sub_folder.type === "folder" && sub_folder.children?.map(child => (
            <Sub_folder sub_folder={child} key={child.id} />
          ))}
        </ul>
      )}
      {/* {sub_folder.type === "folder" && (
        <ul style={{ paddingLeft: "30px", listStyle: "none" }}>
          {sub_folder.children?.map(child => (
            <Sub_folder sub_folder={child} key={child.id} />
          ))}
        </ul>
      )} */}
    </li>
  )
}
export default Sidebar
