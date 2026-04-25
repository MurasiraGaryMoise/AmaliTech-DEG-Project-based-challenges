import './PropertiesPanel.css'

// Temp Mock data
const mockFile = {
  id: 'email_1',
  name: 'Email_Thread_Jan2024.pdf',
  size: '4.2MB',
}

const mockRecents = [
  { id: 'file_summ', name: 'Case_Summary_Draft_v3.docx' },
  { id: 'will_1', name: 'Last_Will_Testament.pdf' },
]

function getFileType(name) {
  return name?.split('.').pop()?.toLowerCase() || 'unknown'
}

function PropertiesPanel() {
  const selectedFile = mockFile
  const recentFiles = mockRecents

  return (
    <div className="properties-panel">
      <div className="properties-panel__header">
        <h2 className="properties-panel__heading">Properties &amp; Details</h2>
      </div>

      {!selectedFile ? (
        <div className="properties-panel__empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <polyline points="13 2 13 9 20 9"/>
          </svg>
          <p>Select a file to view its details</p>
        </div>
      ) : (
        <div className="properties-panel__content">
          <p className="properties-panel__filename">{selectedFile.name}</p>

          <div className="properties-panel__cards">
            <div className="prop-card">
              <span className="prop-card__label">Name</span>
              <span className="prop-card__value">{selectedFile.name}</span>
            </div>
            <div className="prop-card">
              <span className="prop-card__label">Type</span>
              <span className="prop-card__value">{getFileType(selectedFile.name)}</span>
            </div>
            <div className="prop-card">
              <span className="prop-card__label">Size</span>
              <span className="prop-card__value">{selectedFile.size}</span>
            </div>
          </div>
        </div>
      )}

      <div className="recents">
        <h3 className="recents__title">Recently Viewed</h3>
        {recentFiles.length > 0 ? (
          <ul className="recents__list">
            {recentFiles.map((file) => (
              <li key={file.id} className="recents__item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                  <polyline points="13 2 13 9 20 9"/>
                </svg>
                <span>{file.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="recents__empty">No recents yet</p>
        )}
      </div>
    </div>
  )
}

export default PropertiesPanel
