import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={handleToggle}>
        <span className="dropdown-title">{title}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="dropdown-content">{description}</div>}
    </div>
  );
}

export default Dropdown;
