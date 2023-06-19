import React from 'react';
import "./Tag.scss";

function Tag({tag, id}) {
  return (
    <div className='tag-container'>
      <span className='tag-text' key={id}>{tag}</span>
    </div>
  )
}

export default Tag