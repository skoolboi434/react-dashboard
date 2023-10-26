import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import PageWrap from './components/PageWrap';
import ArticleCard from './components/cards/ArticleCard';
import PagesCard from './components/cards/PagesCard';

const App = () => {
  return (
    <div className='dashboard-container'>
      <SidebarMenu />
      <Outlet />
    </div>
  );
};

export default App;
