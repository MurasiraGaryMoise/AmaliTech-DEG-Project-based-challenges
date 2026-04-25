import { VscFolder, VscFolderOpened, VscFile, VscChevronRight } from 'react-icons/vsc'
import { useState } from 'react'
import './Sidebar.css'

function filterTree(nodes, query) {
  if (!query) return nodes

  return nodes.reduce((acc, node) => {
    if (node.type === 'file') {
      if (node.name.toLowerCase().includes(query.toLowerCase())) {
        acc.push(node)
      }
    } else if (node.type === 'folder') {
      const filteredChildren = filterTree(node.children || [], query)
      if (filteredChildren.length > 0) {
        acc.push({ ...node, children: filteredChildren, forceOpen: true })
      }
    }
    return acc
  }, [])
}

const Sub_folder = ({ sub_folder, onFileSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const isFolder = sub_folder.type === 'folder'
  const isExpanded = sub_folder.forceOpen || isOpen

  return (
    <li>
      <span
        className="tree-item"
        onClick={isFolder ? toggleOpen : () => onFileSelect(sub_folder)}
      >
        {isFolder && (
          <VscChevronRight
            className="tree-chevron"
            style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          />
        )}
        {isFolder ? <VscFolder /> : <VscFile />}
        {sub_folder.name}
      </span>

      {isFolder && isExpanded && sub_folder.children?.length > 0 && (
        <ul style={{ paddingLeft: '20px' }}>
          {sub_folder.children.map(child => (
            <Sub_folder sub_folder={child} key={child.id} onFileSelect={onFileSelect} />
          ))}
        </ul>
      )}
    </li>
  )
}

function Sidebar({ data, onFileSelect }) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredData = filterTree(data, searchQuery)

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="sidebar__tree">
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map(root => (
              <Sub_folder sub_folder={root} key={root.id} onFileSelect={onFileSelect} />
            ))
          ) : (
            <p style={{ color: '#484f58', fontSize: '0.8125rem', padding: '12px 16px' }}>
              No results found
            </p>
          )}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
