import React, {  useState } from 'react'
import AuthImage from '../Assets/post/signinbanner.png'

const AuthModal = ({ authType }) => {
    const [modalType, setModalType] = useState(authType);

 
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 ">
            <div className='flex justify-between items-center'>
                <h2 className="text-xl md:text-3xl font-bold mb-4">{modalType == "signup" ? "Create Account" : "Welcome back!"}</h2>
                <p className="text-gray-600 text-sm hidden md:block">
                    {
                        modalType == "signup" ?
                            <>
                                Already have an account? <a className="text-orange-500 hover:text-orange-700" href='#' onClick={() => setModalType("login")}>Sign In</a>
                            </> :
                            <>
                                Don't have an account yet? <a className="text-orange-500 hover:text-orange-700" href="#" onClick={() => setModalType("signup")}>Create new for free!</a>
                            </>
                    }
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex-[2]'>
                    <form>
                        {
                            modalType == "signup" &&
                            <div className="flex flex-wrap mb-1 text-xs md:text-sm">
                                <div className="w-[50%] pl-3 mb-1 md:mb-0">
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="w-1/2 pl-1">
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        }
                        <div className="flex flex-wrap mb-1 text-xs md:text-sm">
                            <div className="w-full pl-3">
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-1 text-xs md:text-sm">
                            <div className="w-full pl-3">
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        {modalType == "signup" && <div className="flex flex-wrap mb-6 text-xs md:text-sm">
                            <div className="w-full pl-3">
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-confirm-password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>}
                        <div className="flex justify-between items-center mb-4 mt-4 text-xs md:text-sm">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-fit md:w-full">
                                {modalType == "signup" ? "Create Account" : "Sign In"}
                            </button>
                            <p className="text-gray-600 text-xs block md:hidden">
                                {
                                    modalType == "signup" ?
                                        <>
                                             <a className="text-gray-500 underline hover:text-gray-700" href='#' onClick={() => setModalType("login")}>or, Sign In</a>
                                        </> :
                                        <>
                                             <a className="text-gray-500 underline hover:text-gray-700" href="#" onClick={() => setModalType("signup")}>or, Create Account</a>
                                        </>
                                }
                            </p>
                        </div>

                        <div className='flex p-1 md:p-2 justify-center gap-4 border-2 rounded-lg cursor-pointer items-center text-xs md:text-sm'>
                            <i className="bi bi-facebook text-blue-700 text-sm md:text-2xl"></i>
                            <p>Sign up with Facebook</p>
                        </div>
                        <div className='flex p-2 justify-center gap-4 border-2 rounded-lg cursor-pointer items-center mt-4 text-xs md:text-sm'>
                            <i className="bi bi-google text-black text-sm md:text-2xl"></i>
                            <p>Sign up with Google</p>
                        </div>

                        {
                            modalType !== "signup" && <p className='text-center mt-4 text-xs md:text-sm'>Forgot Password?</p>
                        }

                    </form>
                </div>
                <div className=''>
                    <img src={AuthImage} alt='auth' className='hidden md:block h-[400px]' />
                    {modalType == "signup" && <p className="text-gray-600 text-[9px] text-center md:text-sm">
                        By signing up, you agree to our <a className="text-orange-500 hover:text-orange-700" href="#">Terms & conditions</a>, <a className="text-orange-500 hover:text-orange-700" href="#">Privacy policy</a>
                    </p>}
                </div>
            </div>

        </div>
    )
}

export default AuthModal