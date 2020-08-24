import React from 'react';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <h2>Employee Directory</h2>
        <p>
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </p>
      </div>
    </div>
  );
}

export default Header;
