import React from "react"

export const Repository = ({props}) => {
  const {html_url, name, description} = props;

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