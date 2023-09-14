import React, { useState } from "react";
import './TopBar.css';
import { MenuList } from '../MenuListItem';
import { NavLink } from "react-router-dom";



import Logo1 from '../media/Logo-Institut-Tazkia.png';
import Logo2 from '../media/Logo-Hamas-Tazkia.png';

const TopBar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title}, index ) => {
    return (
      <li key={index}>
        <NavLink exact="true" to={url} activellassname="active" >
          {title}
        </NavLink> 
      </li>
    ); 
  });
  const handleClick = () =>  {
    setClicked(!clicked)
  }

  return (
    <nav>
      <div className="logo">
        <img src={Logo1} alt="Logo Tazkia" className="logotazkia" />
        <img src={Logo2} alt="Logo Hamas Tazkia" className="logohamastazkia" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times":"fa fa-bars"}></i>
      </div>  
      <ul className={clicked ? "button-menu": "button-menu close"}>{menuList}</ul>
    </nav>
  );
};


export default TopBar;