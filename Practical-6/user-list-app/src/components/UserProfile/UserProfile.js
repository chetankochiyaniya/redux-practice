import './UserProfile.css';

function UserProfile({userProfileData}) {
  const { user } = userProfileData[0];
  const { id, first_name, last_name, email, avatar, isUserActive, userAccess } = user;
  let clicksReviewed = Math.floor((Math.random() * 3000) + 1000);
  let monthlyClicks = clicksReviewed+2000;
  let usage = clicksReviewed/monthlyClicks*100;
  return (
    <div className='user-profile-container'>
      <div className='user-profile-avatar'>
        <img src={ avatar } alt='user-profile-avatar'/>
      </div>
      <div className='name-with-status-icon'>
        <div className='user-profile-name'>{ first_name } { last_name }</div>
        <span className={ id === 1 || isUserActive ? 'active-status-icon' : 'inactive-status-icon' }></span>
      </div>
      <div className='user-profile-email'>{ email }</div>
      <div className='user-plan'>Your Plan: Standard</div>
      <div className='user-profile-status'>
        { userAccess === 'Owner' || isUserActive? 'Active' : 'Inactive' } User <br/> 
        {userAccess} Access
      </div>
      <div className='user-plan-usage'>Plan Uses</div> 
      {/*Progress Bar*/}
      <div className='progressBar'>
        <div className='usage' style={{'width': usage+'%'}}></div>
      </div>
      {/* Clicks Count */}
      <div className='clicks'>
        <div className='clicks-reviewed'>
          <div className='click-reviewed-count'>{ clicksReviewed }</div>
          <div className='click-reviewed-text'>Clicks reviewed</div>
        </div>
        <div className='separator'></div>
        <div className='monthly-clicks'>
          <div className='monthly-click-count'>{ monthlyClicks }</div>
          <div className='monthly-click-text'>Monthly clicks</div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;