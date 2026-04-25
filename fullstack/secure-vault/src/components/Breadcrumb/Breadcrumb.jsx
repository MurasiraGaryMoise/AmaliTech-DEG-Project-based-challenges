import './Breadcrumb.css'

// Mock path — will be replaced with real path from selected file
const mockPath = [
  { id: 'root_1', name: '01_Legal_Department' },
  { id: 'case_a', name: 'Doe_vs_MegaCorp_Inc' },
  { id: 'disc_1', name: 'Discovery_Phase' },
  { id: 'email_1', name: 'Email_Thread_Jan2024.pdf' },
]

function Breadcrumb() {
  const path = mockPath

  return (
    <nav className="breadcrumb">
      <span className="breadcrumb__item">Home</span>

      {path.map((crumb) => (
        <span key={crumb.id} className="breadcrumb__segment">
          <span className="breadcrumb__separator">/</span>
          <span className="breadcrumb__item">{crumb.name}</span>
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
