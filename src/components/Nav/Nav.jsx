import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a  href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'? 'active': ''}><AiOutlineHome /></a>
      <a  href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><BiUserCircle /></a>
      <a  href="#experiences" onClick={()=>setActiveNav('#experiences')} className={activeNav === '#experiences'? 'active': ''}><AiOutlineBook /></a>
      <a  href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active': ''}><AiOutlineFundProjectionScreen/></a>
      <a  href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav