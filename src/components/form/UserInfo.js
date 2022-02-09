import React from 'react';

import { useAuth } from '../../hooks/useAuth';

export const UserInfo = ({ register }) => {
    const { user } = useAuth();

  return <>
    <input 
        name='formInfo.user'
        defaultValue={user.email} 
        ref={register} 
        style={{display: "none"}}
        />
    </>
}

