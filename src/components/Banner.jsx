
import React from 'react';


import playStore from '../assets/assets/download (3).png'
import app from '../assets/assets/app.png'
import heroPic from '../assets/assets/hero.png'
import { NavLink } from 'react-router';


const Banner = () => {
    return (
        <div>
            <div className=' text-center px-3 lg:px-50 items-center justify-center space-y-8'>
                <h2 className='text-5xl font-bold'>We Build<span className='text-[#9f62f2]  '><br></br> Productive </span> Apps </h2>
            
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact</p>
            <div className='space-x-4'>
                <a href='https://play.google.com/store/apps?hl=en' target='_blank' rel='noopener noreferrer'>
                <button className='btn '><img className='w-[35px] rounded-3xl' src={playStore} alt="" /> Play Store</button>
                </a>
                
                <NavLink className='btn' to='/Apps'><img className='w-[35px] rounded-3xl' src={app} alt="" />App store</NavLink>
               </div>
            
            
               <img src={heroPic} alt="" />
            </div>
        </div>
    );
};

export default Banner;