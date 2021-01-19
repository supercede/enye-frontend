import React, { useState, useEffect } from 'react';
// import ProfileList from './components/Profiles/ProfileList';
import axios from 'axios';
import Search from './components/Search/Search';
import Profile from './components/Profiles/Profile';

import './App.css';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUserSize, setPageUserSize] = useState(20);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      console.log(loading);
      const res = await axios.get('https://api.enye.tech/v1/challenge/records');
      setProfiles(res.data.records.profiles);
    };
    fetchProfiles().then(() => {
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => setSearchString(e.target.value);

  const filter = () =>
    profiles.filter(
      (entry) =>
        entry.FirstName.toLowerCase().includes(searchString.toLowerCase()) ||
        entry.LastName.toLowerCase().includes(searchString.toLowerCase())
    );

  const filteredUsers = filter();

  const currentPageUsers = pageUserSize * currentPage;
  const paginationStartsFrom = currentPageUsers - pageUserSize;
  // console.log(currentPage);
  const paginatedProfiles = filteredUsers.slice(
    paginationStartsFrom,
    currentPageUsers
  );

  const setActivePage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className='container mt-3'>
      <div className='row mx-auto'>
        <h1 className='col-sm'>User Profiles</h1>
        <Search handleChange={handleChange} />
      </div>
      <Profile data={paginatedProfiles} loading={loading} />
      <Pagination
        usersPerPage={pageUserSize}
        totalRecords={filteredUsers.length}
        paginate={setActivePage}
      />
      <p>
        Showing results {paginationStartsFrom + 1} to{' '}
        {paginationStartsFrom * (currentPage - (currentPage - 1)) +
          paginatedProfiles.length}{' '}
        of {filteredUsers.length}
      </p>
    </div>
  );
}

export default App;
