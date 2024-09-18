'use client'
import { jwtDecode } from 'jwt-decode'
import { createClient } from '@/app/utils/supabase/client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


export default function UserLink({user_role}:{user_role: 'admin'| null}){

    const t = useTranslations('Dashboard')
    const supabase = createClient();

    
console.log('user_role', user_role)
      if(user_role === 'admin'){
        return(
            <Link href="/admin" className='hover:underline duration-300 decoration-gray-400 underline-offset-4 relative'>{'Panel Administratora'}</Link>

        )
      }else{
        return(
            <Link href="/dashboard" className='hover:underline duration-300 decoration-gray-400 underline-offset-4 relative'>{t('dashboard')}</Link>
    
          )
      }

      
}
