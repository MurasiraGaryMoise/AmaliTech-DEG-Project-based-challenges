import { useEffect, useState } from 'react'
import './SvgConnectors.css'

function SvgConnectors({ nodes, nodeRefs }) {
  const [connectorPaths, setConnectorPaths] = useState([])

  useEffect(() => {
    const paths = []

    nodes.forEach((parentNode) => {
      parentNode.options.forEach((option) => {
        const parentElement = nodeRefs.current[parentNode.id]
        const childElement = nodeRefs.current[option.nextId]

        if (!parentElement || !childElement) return

        const startX = parentElement.offsetLeft + parentElement.offsetWidth / 2
        const startY = parentElement.offsetTop + parentElement.offsetHeight

        const endX = childElement.offsetLeft + childElement.offsetWidth / 2
        const endY = childElement.offsetTop

        const controlPointY = (startY + endY) / 2

        const pathData = `M ${startX} ${startY} C ${startX} ${controlPointY}, ${endX} ${controlPointY}, ${endX} ${endY}`

        paths.push({
          id: `${parentNode.id}-to-${option.nextId}`,
          pathData,
          nodeType: parentNode.type,
        })
      })
    })

    setConnectorPaths(paths)
  }, [nodes])

  return (
    <svg className="svg-connectors">
      {connectorPaths.map((connector) => (
        <path
          key={connector.id}
          d={connector.pathData}
          className={`connector-path connector-path--${connector.nodeType}`}
          fill="none"
        />
      ))}
    </svg>
  )
}

export default SvgConnectors
