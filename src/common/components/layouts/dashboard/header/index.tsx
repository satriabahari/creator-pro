import SearchBar from '@/common/components/elements/SearchBar';
import React from 'react'
import ActionButtons from './ActionButtons';
import Profile from './Profile';
import Breakline from '@/common/components/elements/Breakline';

const HeaderDashboard = () => {
  return (
    <header className="w-full">
      <div className="w-full rounded-lg border border-purple-500 shadow-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <SearchBar/>
          <div className='flex items-center gap-4'>
            <ActionButtons/>
            <Breakline className='h-8'/>
            <Profile/>
          </div>
        </div>
      </div>
    </header>
  );}

export default HeaderDashboard