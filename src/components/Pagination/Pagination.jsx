import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationBox = ({ totalRecords, usersPerPage, paginate }) => {
  const pageNumbers = [];
  //   console.log(totalRecords);

  const totalPages = Math.ceil(totalRecords / usersPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((num, index) => {
    return (
      <PaginationItem key={index}>
        <PaginationLink onClick={() => paginate(num)}>{num}</PaginationLink>
      </PaginationItem>
    );
  });

  return <Pagination className='float-right'>{pages}</Pagination>;
};
export default PaginationBox;
