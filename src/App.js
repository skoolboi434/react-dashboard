import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ComponentContainer from './components/ComponentContainer';
import ArticleCard from './components/cards/ArticleCard';
import PagesCard from './components/cards/PagesCard';

const App = () => {
  return (
    <div className='dashboard-container'>
      <SidebarMenu />
      <ComponentContainer>
        <Outlet />
      </ComponentContainer>
    </div>
  );
};

export default App;
