import React from 'react'
import Card from './Card'
import { achievement } from './index'

function CardSection() {
  return (
    <div className='grid lg:grid-cols-2 gap-8 py-6'>
        {achievement.map((achievement, index) => (
            <Card key={index} Achievement={achievement} />

        ))}
    </div>
  )
}

export default CardSection