import React from "react"

export const Repository = ({name, description, html_url}) => {
  return (
    <div className="repository">
      <a href={html_url}>{name}</a>
      <p>{description ? description : 'No description'}</p>
    </div>
  )
}