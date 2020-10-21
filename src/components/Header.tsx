import React from 'react';
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { BsGrid3X3Gap, BsFillCameraVideoFill } from 'react-icons/bs';

import '../styles/Header.css';
import logo from '../images/logo.png';
import avatar from '../images/avataaars.png'

export default function Header() {
  return (
    <div className="headerContainer">
      
      <img src={logo} alt="youtube"/>

      <div className="search">
        <input placeholder="Pesquisar" />
        <button type="button">
          <AiOutlineSearch color='#9D9D9D' size={18} />
        </button>
      </div>
  
      <div className="menu">
        <ul>
          <li>
            <BsFillCameraVideoFill color='#9D9E9D' size={21} />
          </li>
          <li>
            <BsGrid3X3Gap color='#9D9E9D' size={21} />
          </li>
          <li>
            <AiFillBell color='#9D9E9D' size={21} />
          </li>
          <li>
            <img className="avatar" src={avatar} alt="avatar"/>
          </li>
        </ul>
      </div>
    </div>
  );
}
