import React, { useState, useEffect } from 'react';
import DataTable from '../DataTable';
import API from '../../utils/API';
import './style.css';
import EmployeeContext from '../../utils/EmployeeContext';
import SearchForm from '../SearchForm';

const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: 'descend',
    filteredUsers: [],
    headings: [
      { name: 'Image', width: '10%', order: 'descend' },
      { name: 'Name', width: '10%', order: 'descend' },
      { name: 'Phone', width: '20%', order: 'descend' },
      { name: 'Email', width: '20%', order: 'descend' },
      { name: 'DOB', width: '10%', order: 'descend' },
    ],
  });

  const handleSort = (heading) => {
    let currentOrder = developerState.headings
      .filter((elem) => elem.name === heading)
      .map((elem) => elem.order)
      .toString();

    if (currentOrder === 'descend') {
      currentOrder = 'ascend';
    } else {
      currentOrder = 'descend';
    }

    const compareFnc = (a, b) => {
      if (currentOrder === 'ascend') {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === 'name') {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === 'dob') {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === 'name') {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === 'dob') {
          return b[heading].age - a[heading].age;
        } else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map((elem) => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings,
    });
  };

  function handleSearchChange(event) {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: filteredList,
    });
  }

  useEffect(() => {
    API.getUsers().then((results) => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, [developerState]);

  return (
    <EmployeeContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <SearchForm />
      <div className='data-area'>
        {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </EmployeeContext.Provider>
  );
};

export default DataArea;
