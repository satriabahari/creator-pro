import Card from '@/common/components/elements/Card'
import React from 'react'

interface SocialMediaStatsProps {
  colspan?: string;
}

const SocialMediaStats = ({colspan}: SocialMediaStatsProps) => {
  return (
    <Card className='col-span-2'>SocialMediaStats</Card>
  )
}

export default SocialMediaStats