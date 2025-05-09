import React, { useEffect, useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="Explore-menu" id="ExploreMenu">
      <div className="theme-toggle-menu">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <h1>Explore our menu</h1>
      <p></p>
      <div className="Explore-menu-list">
        {menu_list.map((menu, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === menu.menu_name ? 'All' : menu.menu_name
              )
            }
            key={index}
            className="Explore-menu-list-item"
          >
            <img
              className={category === menu.menu_name ? 'active' : ''}
              src={menu.menu_image}
              alt=""
            />
            <p>{menu.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
