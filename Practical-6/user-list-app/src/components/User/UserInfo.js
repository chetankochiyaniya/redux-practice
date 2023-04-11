import React from 'react';
import { useDispatch } from 'react-redux';

import { mouseEnter, mouseLeave } from '../../action';
import './User.css';

function UserInfo({user}) {
  const { email, first_name, last_name, avatar } = user;
  const dispatch = useDispatch();
  // for hovering effect & displaying card data accordingly
  function handleMouseEnter() {
    dispatch(mouseEnter(user));
  }
  function handleMouseLeave() {
    dispatch(mouseLeave(user));
  }
  return (
    <div className='user-info' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
      <div className='user-avatar'>
        <img src={ avatar } alt='user-avatar'/>
      </div>
      <div className='user-details'>
        <div className='user-name'>{ first_name } { last_name }</div>
        <div className='user-email'>{ email }</div>
      </div>
    </div>  
  )
}

export default UserInfo;