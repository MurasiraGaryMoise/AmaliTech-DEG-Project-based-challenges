import './PreviewChat.css'

const mockMessages = [
  { id: 1, sender: 'bot', text: 'Welcome to Support. What is your issue?' },
  { id: 2, sender: 'user', text: 'Internet is down' },
  { id: 3, sender: 'bot', text: 'Have you tried restarting your router?' },
]

const mockCurrentOptions = [
  { label: 'Yes, didn\'t work', nextId: '4' },
  { label: 'No, let me try', nextId: '5' },
]

const mockIsAtEnd = false

function PreviewChat({ onStop }) {
  return (
    <div className="preview-chat">

      <div className="preview-chat-messages">
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`preview-chat-bubble preview-chat-bubble--${message.sender}`}
          >
            {message.sender === 'bot' && (
              <span className="preview-chat-sender-label">Support Bot</span>
            )}
            <p className="preview-chat-bubble-text">{message.text}</p>
          </div>
        ))}
      </div>

      <div className="preview-chat-footer">
        {mockIsAtEnd ? (
          <div className="preview-chat-end">
            <p className="preview-chat-end-message">You have reached the end of this flow.</p>
            <button className="preview-chat-restart-button">↺ Restart</button>
          </div>
        ) : (
          <div className="preview-chat-options">
            {mockCurrentOptions.map((option, index) => (
              <button key={index} className="preview-chat-option-button">
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default PreviewChat
