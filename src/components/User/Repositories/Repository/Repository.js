import React from "react"

export const Repository = ({name, description, html_url}) => {
  return (
    <div className="repository">
      <a 
        href={html_url}
        target="_blank">
        {name}
      </a>
      <p>
        {description ? description : 'No description'}
      </p>
    </div>
  )
}