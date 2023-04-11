import React from 'react'

export default function Item({imgUrl, date, title,  articleLink="#"}) {
  return (
    <div className=' xl:first:col-span-2 mb-5'>
        {/* IMG */}
        <a href={articleLink} className=' aspect-[4/3] block  w-full mb-4 overflow-hidden rounded-[10px]'>
            <img className=' object-cover w-full h-full hover:scale-110 transition-all duration-300' src={imgUrl} alt="" />
        </a>
        <p className='text-[12.75px] xl:text-[14.875px] text-[#1d1d1d]/60 mb-2'>{date}</p>
        <h2 className='text-[17px] font-medium xl:text-[19.125px]'><a href={articleLink}>{title}</a></h2>
    </div>
  )
}
