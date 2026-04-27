import { useState, useEffect, useRef } from 'react'
import './PreviewChat.css'

function PreviewChat({ nodes, onStop }) {
  const startNode = nodes.find((node) => node.type === 'start')

  const [currentNode, setCurrentNode] = useState(startNode)
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'bot', text: startNode.text },
  ])

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatHistory])

  const isAtEnd = currentNode.options.length === 0

  function handleSelectOption(option) {
    const nextNode = nodes.find((node) => node.id === option.nextId)
    if (!nextNode) return

    setChatHistory((previousHistory) => [
      ...previousHistory,
      { id: Date.now(), sender: 'user', text: option.label },
      { id: Date.now() + 1, sender: 'bot', text: nextNode.text },
    ])

    setCurrentNode(nextNode)
  }

  function handleRestart() {
    setCurrentNode(startNode)
    setChatHistory([{ id: Date.now(), sender: 'bot', text: startNode.text }])
  }

  return (
    <div className="preview-chat">

      <div className="preview-chat-messages">
        {chatHistory.map((message) => (
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
        <div ref={messagesEndRef} />
      </div>

      <div className="preview-chat-footer">
        {isAtEnd ? (
          <div className="preview-chat-end">
            <p className="preview-chat-end-message">You have reached the end of this flow.</p>
            <button className="preview-chat-restart-button" onClick={handleRestart}>
              ↺ Restart
            </button>
          </div>
        ) : (
          <div className="preview-chat-options">
            {currentNode.options.map((option, index) => (
              <button
                key={index}
                className="preview-chat-option-button"
                onClick={() => handleSelectOption(option)}
              >
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
