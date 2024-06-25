import './App.css'
import Navbar from './components/Navbar'
import HeroImg from './Assets/hero.png'
import Card from './components/Card'
// import CardImg1 from './assets/card-1.png'
// import AvatarImg1 from './assets/profile-1.png'
import GroupCard from './components/GroupCard'
import { useState } from 'react'
import data from './Assets/cardData'

function App() {
  const [showFilterDropdown , setShowFilterDropdown] = useState(false);
  const [selectedCardType, setSelectedCardType] = useState('All Posts');
  const [isGroupJoined, setIsGroupJoined] = useState(false);


  const optionBar = [{
    id: 1,
    title: "All Posts",
    active: true
  },
  {
    id: 2,
    title: "Article",
    active: false
  },
  {
    id: 3,
    title: "Event",
    active: false
  },
  {
    id: 4,
    title: "Education",
    active: false
  },
  {
    id: 5,
    title: "Job",
    active: false
  },
  ]



  const handleOptionClick = (title) => {
    setSelectedCardType(title);
    setShowFilterDropdown(false); // Close dropdown after selecting an option
  };

  const handleJoinLeaveGroup = () => {
    setIsGroupJoined(!isGroupJoined); // Toggle join/leave state
  };

  
  
  return (
    <>
      <Navbar />
      {/* Hero Section */}
  
      <div className="w-full p-0 relative">
        <div className='z-2 absolute w-full h-full' style={{ background: "#00000073" }}>
          <div className='text-white flex flex-col justify-end w-full h-full p-4 md:p-[52px]'>
            <p className='text-sm md:text-4xl font-bold'>Computer Engineering</p>
            <p className='fw-light text-xs  md:text-xl'>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <img src={HeroImg} className='h-[200px] md:h-[400px] w-full m-auto' alt='hero' />
      </div>

      {/* option bar */}
      <div>
        <div className="justify-between px-20 py-4 items-center hidden md:flex">
    

<ul className='flex gap-4'>
          {
            optionBar.map(obj => (
              <li
                key={obj.id}
                className={`relative text-base cursor-pointer ${obj.title === selectedCardType ? 'text-[#CB5DE8]' : ''}`}
                onClick={() => handleOptionClick(obj.title)}
              >
                {obj.title}
              </li>
            ))
          }
        </ul>

          <div className='flex gap-4'>
            <select className='bg-gray-300 text-black p-2 rounded-sm cursor-pointer' defaultValue={"Write a Post"}>
              <option value="Write a Post" disabled  hidden>Write a Post</option>
            </select>

            <button
          className={`bg-blue-500 p-2 text-white rounded-sm ${isGroupJoined ? 'bg-red-500' : ''}`}
          onClick={handleJoinLeaveGroup}
        >
          {isGroupJoined ? 'Leave Group' : 'Join Group'}
        </button>

          </div>
        </div>
       
        <div className='flex justify-between items-center p-2 md:hidden'>
        <p className='font-semibold'>Posts(298)</p>
        <div className='relative'>
          <div
            className='flex gap-2 items-center p-2 bg-gray-200 rounded-sm cursor-pointer'
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
          >
            <p>Filter: {selectedCardType}</p>
            <i className={`bi bi-caret-${showFilterDropdown ? 'up' : 'down'}-fill`}></i>
          </div>
          {showFilterDropdown && (
            <div className='absolute top-12 right-1 rounded-md p-2 bg-white shadow-2xl'>
              <ul className='flex flex-col gap-4'>
                {optionBar.map((obj) => (
                  <li
                    key={obj.id}
                    className={`hover:bg-gray-200 p-2 cursor-pointer ${selectedCardType === obj.title ? 'bg-gray-200' : ''}`}
                    onClick={() => handleOptionClick(obj.title)}
                  >
                    {obj.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      </div>
      <hr className='h-[1px] bg-gray-200 w-[90%] m-auto'  />
      
     

      <div className='flex p-0 md:p-8'>
      <div className='flex-[2]'>
        {data
          .filter(post => selectedCardType === 'All Posts' || post.cardType.slice(2).trim() === selectedCardType)
          .map((val, i) => {
            console.log("Original cardType:", val.cardType);
            console.log("Processed cardType:", val.cardType.slice(2).trim());
            console.log(selectedCardType, "Selected type");

            return (
              <Card
                key={i}
                cardImg={val.card_img}
                avatarImg={val.avatarImg}
                avatarName={val.avatarName}
                cardType={val.cardType}
                headings={val.headings}
                desc={val.desc}
                date={val.date}
                jobTitle={val.job_title}
                location={val.location}
                views={val.views}
              />
            );
          })}
      </div>

      {/* This div will be hidden on screens smaller than 1024px */}
      <div className='flex-[1] pt-8 flex-col gap-12 lg:flex hidden'>
        <div className='flex flex-col gap-8'>
          <div className='flex items-center'>
            <i className="bi bi-geo-alt"></i>
            <input type="text" placeholder='Enter your location' className='p-2 outline-none focus:border-b-2 w-full' />
          </div>
          <div className='flex gap-2'>
            <i className="bi bi-info-circle"></i>
            <p className='text-gray-500 w-[70%]'>Your location will help us serve better and extend a personalised experience.</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 p-4'>
          <p className='flex gap-2'>
            <i className="bi bi-hand-thumbs-up-fill"></i>
            RECOMMENDED GROUPS
          </p>
          <div className='mt-8 flex flex-col gap-8'>
            {data.map((val, i) => (
              <GroupCard groupImg={val.avatarImg} groupName={"Leisure"} key={i} />
            ))}
          </div>
          <p className='text-end text-blue-700 mt-4 cursor-pointer'>See more...</p>
        </div>
      </div>
    </div>
</>
  ) }

  export default App;
