import React from 'react'
import '../App.css'
import { useState } from 'react';

function Signin() {

    //const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='flex mt-[95px] items-center justify-center'>
        <form className='w-[380px] pt-10 pr-10 pb-10 pl-5 bg-[#fafafa] border-[1px] border-[#ebebeb] shadow shadow-lg'>
            <h2 className='text-[#636363] mb-7 flex items-center justify-center text-[28px]'>Login</h2>
            <div className="relative mb-[45px]">
                <input 
                className='text-18 pt-[10px] pr-[10px] pb-[10px] pl-[5px] appearance-none block bg-[#fafafa] text-[#636363] w-full border border-0 border-b border-solid border-gray-600 outline-none' 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <span className="absolute h-[60%] w-[100px] top-[25%] left-0 pointer-events-none opacity-50 highlight"></span><span className="relative block w-[100%] bar"></span>
                <label  className='text-[#999] text-18 font-normal absolute pointer-events-none left-0 top-3 transition-all duration-200 ease'>Email</label>
            </div>
            <div class="relative mb-[45px]">
                <input className='text-18 pt-[10px] pr-[10px] pb-[10px] pl-[5px] appearance-none block bg-[#fafafa] text-[#636363] w-full border border-0 border-b border-solid border-gray-600 outline-none' 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/><span className="absolute h-[60%] w-[100px] top-[25%] left-0 pointer-events-none opacity-50 highlight"></span><span className="relative block w-[100%] bar"></span>
                <label className='text-[#999] text-18 font-normal absolute pointer-events-none left-0 top-3 transition-all duration-200 ease'>Password</label>
            </div>
            <button type="submit" className="relative inline-block pt-4 pb-4 pr-20 pl-20 mt-[.3em] mr-0 mb-[1em] ml-0 w-[100%] align-middle text-[#fff] text-16 leading-[20px] antialiased text-center tracking-normal bg-transparent border-0 border-b-2 border-b-solid cursor-pointer transition-all duration-150 ease focus:outline-none button buttonBlue">Login
                <div class="absolute top-0 left-0 w-[100%] h-[100%] overflow-hidden bg-transparent ripples buttonRipples"><span class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-0 h-0 border border-r-[50%] bg-white bg-opacity-25 ripplesCircle"></span></div>
            </button>
        </form>

    </div>
  )
}

export default Signin