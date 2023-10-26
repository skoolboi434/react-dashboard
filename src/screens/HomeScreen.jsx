import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSearch, FaPaperPlane, FaNewspaper } from 'react-icons/fa';

const HomeScreen = () => {
  return (
    <>
      <div className='content-container'>
        <div className='header-container'>
          <div className='header-title'>
            <span>Primary</span>
            <h2>Dashboard</h2>
          </div>
          <div className='user-info'>
            <div className='search-box'>
              <FaSearch />
              <input type='text' placeholder='Search...' />
            </div>
            <img src='https://placehold.co/400' alt='' />
          </div>
        </div>
        <div className='card-container'>
          <h3 className='main-title'>Today's Data</h3>
          <div className='card-wrapper'>
            <div className='article-card light-red'>
              <div className='card-header'>
                <div className='total'>
                  <span className='title'>Article Total: </span>
                  <span className='count'>10</span>
                </div>
                <div className='icon-container dark-red'>
                  <FaPaperPlane />
                </div>
              </div>
              <span className='card-details'>Details</span>
            </div>

            <div className='page-card light-purple'>
              <div className='card-header'>
                <div className='total'>
                  <span className='title'>Print Page Total: </span>
                  <span className='count'>15</span>
                </div>
                <div className='icon-container dark-purple'>
                  <FaNewspaper />
                </div>
              </div>
              <span className='card-details'>Details</span>
            </div>

            <div className='edition-card light-green'>
              <div className='card-header'>
                <div className='total'>
                  <span className='title'>Editions Total: </span>
                  <span className='count'>7</span>
                </div>
                <div className='icon-container dark-green'>
                  <FaNewspaper />
                </div>
              </div>
              <span className='card-details'>Details</span>
            </div>
          </div>
        </div>{' '}
        {/* End Card Container */}
        <div className='table-wrapper'>
          <h3 className='heading'>Content Data</h3>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Publisher</th>
                  <th>Status</th>
                  <th>Date Added</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td></td>
                  <td>Bills Hamlin will put the millions raised into his charity</td>
                  <td>Times Leader</td>
                  <td>Draft</td>
                  <td>Oct 25, 2023</td>
                  <td>
                    <Button variant='primary'>Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>231</td>
                  <td></td>
                  <td>Bills Hamlin will put the millions raised into his charity</td>
                  <td>Times Leader</td>
                  <td>Draft</td>
                  <td>Oct 25, 2023</td>
                  <td>
                    <Button variant='primary'>Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td></td>
                  <td>Bills Hamlin will put the millions raised into his charity</td>
                  <td>Times Leader</td>
                  <td>Draft</td>
                  <td>Oct 25, 2023</td>
                  <td>
                    <Button variant='primary'>Edit</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
