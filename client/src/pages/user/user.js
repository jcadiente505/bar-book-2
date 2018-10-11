import React from 'react';
import UserCard from "../../components/card";
import FullWidthTabs from "../../components/tabs";

const User = props => {  
  return (
    <div>
      <UserCard
        username={props.username} />
      <FullWidthTabs />
    </div>
  )
}

export default User
