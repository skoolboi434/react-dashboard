import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import { Row, Col } from 'react-bootstrap';
import ComponentContainer from './components/ComponentContainer';
import ArticleCard from './components/cards/ArticleCard';
import PagesCard from './components/cards/PagesCard';

const App = () => {
  return (
    <div className='dashboard-container'>
      <SidebarMenu />
      <ComponentContainer>
        <div className='heading-container mb-3'>
          <h3>Component Container</h3>
        </div>
        <Row>
          <Col md={6}>
            <ArticleCard />
          </Col>
          <Col md={6}>
            <PagesCard />
          </Col>
        </Row>
      </ComponentContainer>
    </div>
  );
};

export default App;
