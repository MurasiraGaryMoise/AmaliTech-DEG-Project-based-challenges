import { VscFolder, VscFolderOpened, VscFile, VscChevronRight } from 'react-icons/vsc'
import { useState, useCallback } from 'react'
import './Sidebar.css'

function filterTree(nodes, query) {
  if (!query) return nodes
  return nodes.reduce((acc, node) => {
    if (node.type === 'file') {
      if (node.name.toLowerCase().includes(query.toLowerCase())) acc.push(node)
    } else if (node.type === 'folder') {
      const filteredChildren = filterTree(node.children || [], query)
      if (filteredChildren.length > 0) acc.push({ ...node, children: filteredChildren, forceOpen: true })
    }
    return acc
  }, [])
}

function getVisibleItems(nodes, openFolders) {
  return nodes.reduce((acc, node) => {
    acc.push(node)
    if (node.type === 'folder' && (openFolders.has(node.id) || node.forceOpen)) {
      acc.push(...getVisibleItems(node.children || [], openFolders))
    }
    return acc
  }, [])
}

const Sub_folder = ({ sub_folder, onFileSelect, openFolders, toggleFolder, focusedId, selectedId }) => {
  const isFolder = sub_folder.type === 'folder'
  const isExpanded = openFolders.has(sub_folder.id) || sub_folder.forceOpen
  const isFocused = sub_folder.id === focusedId
  const isSelected = sub_folder.id === selectedId

  return (
    <li>
      <span
        className={`tree-item${isFocused ? ' tree-item--focused' : ''}${isSelected ? ' tree-item--selected' : ''}`}
        onClick={isFolder ? () => toggleFolder(sub_folder.id) : () => onFileSelect(sub_folder)}
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
            <Sub_folder
              sub_folder={child}
              key={child.id}
              onFileSelect={onFileSelect}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
              focusedId={focusedId}
              selectedId={selectedId}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

function Sidebar({ data, onFileSelect, selectedId }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFolders, setOpenFolders] = useState(new Set())
  const [focusedIndex, setFocusedIndex] = useState(-1)

  const filteredData = filterTree(data, searchQuery)

  const toggleFolder = useCallback((id) => {
    setOpenFolders(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const handleKeyDown = (e) => {
    const visibleItems = getVisibleItems(filteredData, openFolders)
    const item = visibleItems[focusedIndex]

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex(prev => Math.min(prev + 1, visibleItems.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'ArrowRight') {
      if (item?.type === 'folder') setOpenFolders(prev => new Set([...prev, item.id]))
    } else if (e.key === 'ArrowLeft') {
      if (item?.type === 'folder') {
        setOpenFolders(prev => { const next = new Set(prev); next.delete(item.id); return next })
      }
    } else if (e.key === 'Enter') {
      if (item?.type === 'file') onFileSelect(item)
    }
  }

  const visibleItems = getVisibleItems(filteredData, openFolders)
  const focusedId = visibleItems[focusedIndex]?.id

  return (
    <aside className="sidebar" tabIndex={0} onKeyDown={handleKeyDown}>
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
              <Sub_folder
                sub_folder={root}
                key={root.id}
                onFileSelect={onFileSelect}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
                focusedId={focusedId}
                selectedId={selectedId}
              />
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
