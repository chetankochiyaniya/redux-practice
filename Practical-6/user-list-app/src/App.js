import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
const UserList = React.lazy(() => import('./components/UserList/UserList'));
const UserProfile = React.lazy(() => import('./components/UserProfile/UserProfile'))

function App() {
  const userProfileData = useSelector((state) => state.userListReducer.userProfile)
  const userDetails = useSelector((state) => state.userListReducer.userDetails)
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='app container-fluid'>
      <div className='user-list-main-container'>
        <div className={userProfileData.length === 0 ? 'user-list' : 'user-list user-list-sm'}>  
          <UserList userDetails={userDetails} />
        </div>
        <div className='user-profile'>
        {
          userProfileData.length !== 0 && <UserProfile userProfileData={userProfileData}/>
        }
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export default App;