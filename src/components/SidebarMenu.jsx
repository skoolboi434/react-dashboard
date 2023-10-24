import React from 'react';
import { Link } from 'react-router-dom';
import { FaCreativeCommonsRemix, FaThLarge, FaPaperPlane, FaNewspaper, FaSlidersH } from 'react-icons/fa';

const SidebarMenu = () => {
  return (
    <div className='sidebar'>
      <div className='heading-container'>
        <FaCreativeCommonsRemix />
        <h3 className='heading'>Dashboard</h3>
      </div>

      <div className='nav-container'>
        <ul>
          <li>
            <FaThLarge />
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <FaPaperPlane />
            <Link to='/articles'>Articles</Link>
          </li>
          <li>
            <FaNewspaper />
            <Link to='/pages'>Pages</Link>
          </li>
          <li>
            <FaSlidersH />
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
