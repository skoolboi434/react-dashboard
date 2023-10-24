import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ArticleCard from '../components/cards/ArticleCard';
import PagesCard from '../components/cards/PagesCard';
import ArticlesList from '../components/content/ArticlesList';

const HomeScreen = () => {
  return (
    <>
      <div className='heading-container mb-3'>
        <h3>Component Container</h3>
      </div>
      <Container>
        <Row className='mb-5'>
          <Col md={6}>
            <ArticleCard />
          </Col>
          <Col md={6}>
            <PagesCard />
          </Col>
        </Row>
      </Container>

      <div className='a-glance-container'>
        <div className='section-heading mb-4'>
          <h2 class='heading'>Your Day at A Glance</h2>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <ArticlesList />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeScreen;
