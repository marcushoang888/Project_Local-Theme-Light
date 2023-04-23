import React from 'react'
import Link from './Link'
import Categorie from './Categorie'

export default function MenuLink() {
 let menuLink = ["Categories", "About Us", "Our Store", "Recipes", "Blog", "FAQ", "Account"]
  return (
    <ul>

      {menuLink.map((item) =>{
        <Link link={item}/>
      })}
    </ul>
   
    // <ul  className="">
    //     <Link link="Categories" />
    //     <Link link="About us" />
    //     <Link link="Our Store" />
    //     <Link link="Recipes" />
    //     <Link link="Blog" />
    //     <Link link="FAQ" />
    //     <Link link="Account"/>
        
    // </ul>

  )
}

