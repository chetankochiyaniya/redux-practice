import React from 'react';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';

import { handlePagination } from '../../action';
import './UserListPagination.css';

function UserListPagination() {
  const dispatch = useDispatch()
  let activePage = useSelector((state) => state.userListReducer.pagination)
  return (
    <div className="user-list-pagination">
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={6}
          totalItemsCount={12}
          onChange={(pageNumber) => dispatch(handlePagination(pageNumber),[dispatch])}
        />
      </div>
    </div> 
  )
}

export default UserListPagination;