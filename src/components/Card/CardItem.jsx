import React from 'react'

export default function ({src, alt, text1, text2, text3}) {
  return (
    <div className="relative h-[346px] " >
    <img 
      className=" z-[-1] rounded-[10px] w-full h-full object-cover"
      src={src}
      alt={alt}
    />
    <div className="absolute left-0 bottom-0 p-6 xl:p-9 text-[#1d1d1d] lg:max-w-[60%]">
      <p className="text-[13px] xl:text-[15px] leading-5 mb-[10px] xl:mb-3 ">{text1}</p>
      <h3>
        <a className="block text-[30px] xl:text-[38px] leading-9 font-medium underline xl:no-underline xl:hover:underline pb-[3px] mb-4 " href="">{text2}</a>
      </h3>
      <p className="text-[14px] xl:text-[17px]  leading-6 ">{text3}</p>
    </div>
  </div>
  )
}
