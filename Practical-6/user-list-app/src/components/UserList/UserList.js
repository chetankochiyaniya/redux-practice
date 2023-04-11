import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestUsers } from '../../action';
import EmptyList from '../EmptyList/EmptyList';
import UserListPagination from '../UserListPagination/UserListPagination';
import './UserList.css';
const User = React.lazy(() => import('../User/User'));

function UserList({ userDetails }) {
  const { error, isLoading, pagination } = useSelector((state) => state.userListReducer)
  const dispatch = useDispatch()
  // for requesting user details
  useEffect(() => {
    dispatch(requestUsers(pagination)) 
  }, [dispatch, pagination])
  // for displaying users list
  let displayList;
  if(userDetails.length === 0) {
    displayList = <EmptyList />
  }
  else {
    displayList = userDetails.map((user) => {
      const { id } = user
      return(
        <User key={id} user={user} />        
      )
    })
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
    {
      isLoading 
      ? ( <h2>Loading...</h2> ) 
      : error 
      ? ( <h2>{error}</h2> ) 
      : <>
          { userDetails.length !== 0 && 
            <div className='title'>
              <div className='user-info name'>Name</div>
              <div className='status'>Status</div>
              <div className='access'>Access</div>
              <div className='icon'></div>
            </div> 
          }
          <div className='user-list-container'>
            { displayList }
          </div> 
          <UserListPagination />
        </>
    }
    </Suspense>
    
    
  )
}

export default UserList