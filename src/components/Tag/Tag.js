import React from 'react';
import "./Tag.scss";

function Tag({tag}) {
  return (
    <div className='tag-container'>
      <span className='tag-text'>{tag}</span>
    </div>
  )
}

export default Tag