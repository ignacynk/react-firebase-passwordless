import React from 'react';
import { 
    Input,
} from '@chakra-ui/react'

import { useAuth } from '../../hooks/useAuth';

export const UserInfo = ({ register }) => {
    const { user } = useAuth();

  return <>
    {/* <Input 
        name='userinfo.email' 
        ref={register} /> */}
    <Input 
        name='userInfo.email'
        defaultValue={user.email} 
        ref={register} />
    </>
}

