import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";




const Card = ({data}) => {
  return (
    <div className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden '>

       <FaRegFileAlt/>
        <p className='text-sm font-semibold mt-5 leading-tight'>{data.desc}</p>
        
        <div className='footer absolute bottom-0 w-full  left-0 '>
             <div className='flex items-center justify-between px-8 py-3 mb-3'> 
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex           items-center justify-center'>

                            {data.close ? <IoMdCloseCircleOutline/> : <FaDownload size='.8em' color='#fff'/> }
                         
                         </span>
               </div>

               {
                data.tag.isOpen && (  
                     <div className={`tag w-full py-4 ${"bg-"+data.tag.tagColor+"-600"}-400 flex items-center      justify-center`}>
                         <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                      </div> 
                )
               }

         
      </div>
    </div>
  )
}

export default Card
