import React from 'react';
import './Items.scss';

export const Items = (props) => {
  const {repos, reposStart, reposEnd} = props;
  return (
    <p className="number-items">
      {reposStart === repos ? null : reposStart + '-'}
      {reposEnd > repos ? repos : reposEnd} of {repos} items
    </p>
  )
}