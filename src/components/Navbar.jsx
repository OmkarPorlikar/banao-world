import { useEffect, useState } from 'react'
import LogoImage from '../Assets/users/logo.png'
import { createPortal } from 'react-dom'
import AuthModal from './AuthModal';

const Navbar = () => {
    const [dropdownClick, setDropDownClick] = useState(false);
    const [isGroupJoined, setIsGroupJoined] = useState(false);

    useEffect(()=>{
        if(dropdownClick == true){
            document.body.style.overflow = "hidden"
        }else{
             document.body.style.overflow = "visible"
        }
    },[dropdownClick]);

    const handleJoinLeaveGroup = () => {
        setIsGroupJoined(!isGroupJoined); // Toggle join/leave state
      };
    
      
    return (
        <nav className="p-0 md:p-3 w-full absolute md:static z-50 top-0  ">
            <div className="w-full justify-between items-center hidden md:flex">
                <a className="navbar-brand d-flex align-items-center gap-4" href="#">
                    <img src={LogoImage} alt="" width="160" height="24" className="d-inline-block align-text-top" />

                </a>
                {/* search bar */}
                <div className="d-flex relative ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search absolute top-[30%] left-3" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input type="text" className=" outline-none pl-8 bg-gray-200 p-2 rounded-full w-[320px]" placeholder="Search for your favorite groups in ATG" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                {/* dropdown */}
                <div className="flex ">
                    Create Account.
                    <p className='text-blue-700 cursor-pointer' onClick={() => setDropDownClick(true)}>
                        It's free!
                        <i className="bi bi-caret-down-fill"></i>
                    </p>
                    {
                        dropdownClick && createPortal(
                            <div className='  absolute top-0 w-full h-screen bg-[#000000b8] flex justify-normal items-end md:justify-center md:items-center z-[99999] '>
                                <div className='bg-white w-full md:w-fit h-[70%] md:h-[80%] rounded-t-2xl md:rounded-2xl relative overflow-auto  '>
                                   
                                   <div>  
                                    <div className='absolute top-0 md:top-[0px] right-4 md:right-0 text-black  cursor-pointer' onClick={() => setDropDownClick(false)}>
                                        <i className="bi bi-x-circle-fill text-2xl"></i>
                                    </div>
                                    {/* signup header */}
                                    <p className='bg-green-100 p-4 text-green-900 font-semibold rounded-t-2xl hidden md:block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                    {/* actual modal */}
                                    <AuthModal authType={"signup"} />
                                    </div>
                                </div>
                            </div>,
                            document.body
                        )
                    }
                </div>
            </div>
            <div className='flex justify-between items-center m-2 md:hidden'>
                <div className='cursor-pointer'>
                    <i className='bi bi-arrow-left text-white text-2xl'></i>
                </div>
                <p className='text-white border-2 p-2 rounded-lg cursor-pointer hover:bg-[#ffffff38] text-sm'
                          onClick={handleJoinLeaveGroup}
                >
                {isGroupJoined ? 'Leave Group' : 'Join Group'}

                </p>
            </div>
            {/* write floating icon */}
            <div className='p-8 w-10 h-10 bg-pink-500 flex justify-center items-center rounded-full fixed bottom-8 right-4 cursor-pointer md:hidden' onClick={()=>setDropDownClick(true)}>
                <i className='bi bi-pencil-fill'></i>
            </div>
        </nav>
    )
}

export default Navbar