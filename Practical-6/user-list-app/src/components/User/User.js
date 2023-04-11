import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from './UserInfo';
import OtherInfo from './OtherInfo';
import './User.css';

function User({user}) {
  const dispatch = useDispatch();
  useMemo(() => {
    const onResize = () => {
      dispatch({ type: "SCREEN_RESIZE", screenWidth: window.innerWidth });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);
  // screen size
  let screenSize = useSelector((state) => state.screenReducer.screenWidth);
  screenSize = screenSize? screenSize : window.innerWidth;

  return (
    <div className={screenSize < 992 ? 'user-sm-container' : 'user-container'} >
      <UserInfo user={user}/>
      {
        screenSize < 992 
        ? <div className='other-info'>
            <OtherInfo user={user} />
          </div> 
        : <OtherInfo user={user}/>    
      }
    </div>
  )
}

export default User;