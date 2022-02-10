import React from 'react';

import { useAuth } from '../../hooks/useAuth';

export const UserInfo = ({ register }) => {
    const { user } = useAuth();

  return <>
    <input 
        name='userID'
        defaultValue={user.email} 
        ref={register} 
        style={{display: "none"}}
        />
    </>
}

