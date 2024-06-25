import React, { useState } from 'react';

const GroupCard = ({ groupName, groupImg }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <div className= 'flex justify-between' >
      <div className='flex gap-2 items-center'>
        <img src={groupImg} alt="groupimg" className='w-10 h-10 rounded-full' />
        <p>{groupName}</p>
      </div>
      <button
        className={`p-2 pl-4 pr-4 rounded-2xl ${isFollowed ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={handleFollowToggle}
      >
        {isFollowed ? 'Followed' : 'Follow'}
      </button>
    </div>
  );
};

export default GroupCard;
