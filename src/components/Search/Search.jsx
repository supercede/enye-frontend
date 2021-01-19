import { Input } from 'reactstrap';

const Search = ({ handleChange, placeholder }) => {
  return (
    <Input
      className='col-sm-6'
      type='search'
      placeholder='search names'
      onChange={handleChange}
    />
  );
};

export default Search;
