import React from 'react'

export default function Map(categorie,link,children) {
  return (
    categorie.map(()=> {
        <li className="py-[10px] px-5 border-solid border-[1px] text-[#1d1d1d] text-base leading-6">
        <a className="flex justify-between items-center" href="">{link} {children}</a>
      </li>
    })
  )
}
