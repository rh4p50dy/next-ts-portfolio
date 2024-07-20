import React from 'react'

function DataItem({number="2",text1="Years of",text2="Experirence"}) {
  return (
    <div className='flex items-center mx-[55px]'>
        <div className='text-[60px] font-bold'>{number}</div>
        <div className='text-[20px] opacity-50 ps-[5%] leading-[25px]'>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>

    </div>
  )
}

export default DataItem