import React, { useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { BiDotsHorizontal } from 'react-icons/bi';
import { FaPen, FaEye ,  FaBriefcase} from 'react-icons/fa';
import { space } from 'postcss/lib/list';

const Card = ({ cardImg, avatarImg, avatarName, cardType, desc, headings, date, location, jobTitle , views}) => {
    const [edit, setEdit] = useState(false);
    const isMobile = window.innerWidth <= 786;

    const truncateText = (text) => {
        if (text.length > 19) {
            return `${text.substring(0, 19)}...`;
        }
        return text;
    };
    return (
        <div className='w-[90%] border-1 mt-4 ml-4 flex flex-col gap-2 p-4 mb-16 card-container border-solid'>
            {/* card image */}
            <div className={`w-full overflow-hidden`}>
                {!(cardImg === '') ? <img src={cardImg} alt="cardimg" className='w-full' /> : null}
            </div>
            {/* card content */}
            <div className='flex flex-col gap-2 p-4'>
                {/* card type */}
                <p className='font-medium flex gap-2 text-xs md:text-base'>
                    {cardType}
                </p>
                {/* card title */}
                <div className='flex justify-between gap-2'>
                <p className='font-bold text-[16px] md:text-2xl'>
    {headings}
</p>


                    <div className='relative'>
                        <BiDotsHorizontal 
                            onClick={() => setEdit(!edit)} 
                            className='cursor-pointer'
                        />
                        {edit && (
                            <ul className='absolute right-0 bg-white shadow-lg rounded mt-2 z-10 w-24'>
                                <li className='px-4 py-2 hover:bg-gray-400 cursor-pointer'>Edit</li>
                                <li className='px-4 py-2 hover:bg-gray-400 cursor-pointer'>Report</li>
                                <li className='px-4 py-2 hover:bg-gray-400 cursor-pointer'>Option 3</li>
                            </ul>
                        )}
                    </div>
                </div>
                {/* card description */}
                <p className='text-gray-400 text-xs md:text-sm'>
                    {desc}
                </p>
            </div>

            {/* card footer */}
            <div className='flex justify-between items-center pl-4 pr-4'>
            {/* Avatar and Name */}
            <div className='flex gap-2 justify-center items-center '>
               <div className=' '>
                 {/* Avatar Image */}
                 <img src={avatarImg} alt="avatarimg" className='w-10 h-10 rounded-full' />
               </div>


               <div className='flex  flex-col items-center gap-1 '>
                {/* Name */}
                <p className='font-medium text-xs md:text-sm'>{avatarName}</p>
  {/* View on small screens */}
  <div className='lg:hidden flex items-center'>
                    <FaEye className="text-xs md:text-sm" />
                    <p className='text-xs md:text-sm text-gray-500'>{views} views</p>
                </div>
               </div>
               

            </div>
            {/* Views and Share */}
            <div className='flex gap-4 items-center'>
                {/* View on large screens */}
                <div className='hidden lg:flex gap-1 items-center'>
                    <FaEye className="text-xs md:text-sm" />
                    <p className='text-xs md:text-sm text-gray-500'>{views} views</p>
                </div>
               
                {/* Share button */}
                <div className='bg-gray-200 p-2 rounded'>
                <i className="bi bi-share text-xs md:text-sm not-italic cursor-pointer"> share </i>

                </div>
            </div>
        </div>

            {/* visit button */}
            {(date || location || jobTitle) && (

            <div className='visit-button p-4 text-[12px] md:text-[13px]'>
            <div className='mb-2 flex'>
                                
                
               { date && (
                    <p className='flex gap-4 items-center'>
                        <AiTwotoneCalendar className='me-1' />
                        <span>{date}</span>
                    </p>
                ) }
                {jobTitle && (
                    <p className='ms-5 flex gap-4 items-center'>
                        <FaBriefcase className='me-1' />
                        <span>
                            {isMobile ? truncateText(jobTitle) : jobTitle}
                        </span>
                    </p>
                ) }
               { location && (
                    <p className='ms-5 flex gap-4 items-center'>
                        <IoLocationOutline className='me-1' />
                        <span>
                            {isMobile ? truncateText(location) : location}
                        </span>
                    </p>
                ) }


            </div>
            <button className="outline-none w-full bg-white border-[0.7px] border-solid border-[#6458a5] rounded-[8px] py-[10px] font-semibold text-[13px] ">
                {(jobTitle)? <span className='text-[#6bec7f]'> Apply on TimesJob </span> : <span className='text-[#E56135]'> Visit Website </span> }   
            </button>
        </div>
                    )}

        </div> 
            
    )
}

export default Card;
