import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {


const data = [
    {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
        tag: {isOpen: true, tagTitle : "download now", tagColor: "green"}},

        {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
        tag: {isOpen: true, tagTitle : "download now", tagColor: "green"}},

        {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
        tag: {isOpen: true, tagTitle : "download now", tagColor: "green"}}

]




  return (
    <div className='fixed z-[3] w-full left-0 h-full h-full flex gap-5 flex-wrap p-10'>
       
         {data.map((item, index)=>(
               <Card data={item}/>
         ))}
         
     </div>
  )
}

export default Foreground
