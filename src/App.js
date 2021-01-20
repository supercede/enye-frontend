import React, { useState, useEffect } from 'react';
// import ProfileList from './components/Profiles/ProfileList';
import axios from 'axios';
import Search from './components/Search/Search';
import Profile from './components/Profiles/Profile';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filters/Filters';

import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUserSize, setPageUserSize] = useState(20);
  const [filters, setFilters] = useState({
    Gender: '',
    PaymentMethod: '',
  });

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

  let returnedProfiles = profiles;

  const handleChange = (e) => setSearchString(e.target.value);
  const handleGenderFilterChange = (e) => {
    const gender = e.target.value;
    setFilters({ ...filters, Gender: gender });
  };

  const handlePaymentFilterChange = (e) => {
    const paymentMethod = e.target.value;
    setFilters({ ...filters, PaymentMethod: paymentMethod });
  };

  // Search

  if (searchString) {
    const search = () =>
      profiles.filter(
        (entry) =>
          entry.FirstName.toLowerCase().includes(searchString.toLowerCase()) ||
          entry.LastName.toLowerCase().includes(searchString.toLowerCase())
      );

    returnedProfiles = search();
  }

  // Filter
  if (filters.Gender) {
    returnedProfiles = returnedProfiles.filter(
      (profile) => profile.Gender === filters.Gender
    );
  }

  if (filters.PaymentMethod) {
    returnedProfiles = returnedProfiles.filter(
      (profile) => profile.PaymentMethod === filters.PaymentMethod
    );
  }

  // Paginate
  const currentPageUsers = pageUserSize * currentPage;
  const paginationStartsFrom = currentPageUsers - pageUserSize;
  const paginatedProfiles = returnedProfiles.slice(
    paginationStartsFrom,
    currentPageUsers
  );
  const to =
    paginationStartsFrom * (currentPage - (currentPage - 1)) +
    paginatedProfiles.length;
  const from = paginationStartsFrom + 1;

  const setActivePage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className='container py-3'>
      <div className='row mx-auto'>
        <h1 className='col-sm'>User Profiles</h1>
        <Search handleChange={handleChange} />
      </div>
      <Filter
        handleGender={handleGenderFilterChange}
        handlePayment={handlePaymentFilterChange}
        data={filters}
      />
      <Profile data={paginatedProfiles} loading={loading} />
      <Pagination
        usersPerPage={pageUserSize}
        totalRecords={returnedProfiles.length}
        paginate={setActivePage}
      />
      <p>
        Showing results {from} to {to} of {returnedProfiles.length}
      </p>
    </div>
  );
}

export default App;
