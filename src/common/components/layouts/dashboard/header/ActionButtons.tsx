import LocaleSwitcher from '@/common/components/elements/LocaleSwitcher'
import NotificationButton from '@/common/components/elements/NotificationButton'
import ThemeSwitcher from '@/common/components/elements/ThemeSwitcher'
import React from 'react'

const ActionButtons = () => {
  return (
    <div className="flex gap-3 items-center">
        <LocaleSwitcher className='rounded-full' />
        <ThemeSwitcher className='rounded-full' />
        <NotificationButton className='rounded-full'/>
      </div>
  )
}

export default ActionButtons