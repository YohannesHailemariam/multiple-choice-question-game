import React from 'react'
import '../App.css'

function Signin() {
  return (
    <div className='flex items-center justify-center mt-[200px]'>
        <form className='w-[380px] pt-10 pr-10 pb-10 pl-5 bg-[#fafafa] border-[1px] border-[#ebebeb] shadow shadow-lg'>
            <h2 className='text-[#636363] mb-7 flex items-center justify-center text-[28px]'>Login</h2>
            <div className="relative mb-[45px]">
                <input className='text-18 pb-[10px] pr-[10px] pb-[10px] pl-[5px] appearance-none block bg-[#fafafa] text-[#636363] w-full border border-0 border-b border-solid border-gray-600 outline-none' type="email" /><span class="highlight"></span><span class="bar"></span>
                <label className='text-[#999] text-18 font-normal absolute pointer-events-none left-0 top-3 transition-all duration-200 ease'>Email</label>
            </div>
            <div class="relative mb-[45px]">
                <input className='text-18 pb-[10px] pr-[10px] pb-[10px] pl-[5px] appearance-none block bg-[#fafafa] text-[#636363] w-full border border-0 border-b border-solid border-gray-600 outline-none' type="password" /><span class="highlight"></span><span class="bar"></span>
                <label className='text-[#999] text-18 font-normal absolute pointer-events-none left-0 top-3 transition-all duration-200 ease'>Password</label>
            </div>
            <button type="button" class="button buttonBlue">Login
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
            </button>
        </form>

    </div>
  )
}

export default Signin