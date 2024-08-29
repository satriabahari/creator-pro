import INFO_ITEMS from '@/common/constants/info'
import React from 'react'
import InfoCard from './InfoCard'

const InfoList = () => {
  const filteredItems = INFO_ITEMS.filter((item) => item.isShow)
  return (
    <div className='grid grid-cols-4 gap-4'>
      {filteredItems.map((item, index) => (
        <InfoCard key={index} {...item}/>
      ))  
      }
    </div>
  )
}

export default InfoList