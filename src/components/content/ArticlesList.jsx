import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const res = await fetch('http://localhost:8888/MIDTC-Editorial/wp-json/wp/v2/articles');
      if (!res.ok) {
        alert('There has been an error');
        return;
      }

      const articles = await res.json();
      setArticles(articles);
      console.log(articles);
    }
    loadArticles();
  }, []);
  return (
    <div className='content-list-container'>
      {articles.map(article => (
        <div className='article-content-card' key={article.id}>
          <h4 className='heading'>{article.title.rendered}</h4>
          <span className='pub-status'>
            Publish Status: <span className='status'>{article.acf.status}</span>
          </span>
          <div className='btn-container mt-2 justify-content-end d-flex'>
            <Link to='/' className='btn btn-primary'>
              View Full Article
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
