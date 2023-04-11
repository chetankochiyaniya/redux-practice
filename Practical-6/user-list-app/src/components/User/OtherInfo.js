import React from 'react';
import { Lock, Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';

import { changeUserStatus, removeUser, changeUserAccess } from '../../action';
import './User.css';

function OtherInfo({user}) {
  const { id, userAccess } = user;
  const dispatch = useDispatch();
  // conditional rendering for owner & user
  return (
  <>
    {
      userAccess === 'Owner'
      ? <>
          <div className='user-status'>
            <div className='owner-status'>Active</div> 
          </div>
          <div className='user-access'>
            <div>Owner</div>        
          </div>
          <div className='icon'>
            <Lock size={20} onClick={() => alert('Owner can\'t be removed.')}/>
          </div>
        </>
      : <>
          <div className='user-status'>
            <select id="status" name="status" onChange={() => dispatch(changeUserStatus(id))}>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
          </div>
          <div className='user-access'>
            <select id="access" name="access" onChange={() => dispatch(changeUserAccess(id))}>
              <option value="manager">Manager</option>
              <option value="read">Read</option>
            </select>     
          </div>
          <div className='icon'>
            <Trash2 size={20} onClick={() => dispatch(removeUser(id))}/>     
          </div> 
        </>
    }
  </>
  )
}

export default OtherInfo;