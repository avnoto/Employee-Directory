import React, { useContext } from 'react';
import './style.css';
import EmployeeContext from '../../utils/EmployeeContext';

const SearchForm = () => {
  const context = useContext(EmployeeContext);
  return (
    <form className='search'>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for an employee...'
          onChange={(e) => context.handleSearchChange(e)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
