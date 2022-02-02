import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
         <SubHeading title="Chade the new flavour" />
         <h1 className='app__header-h1'>The Key To Fine Dining</h1>
         <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor siti assumenda ratione aut voluptatem culpa ea ipsam dolorum! Non praesentium perferendis hic deleniti velit ea repudiandae similique et nulla natus eum omnis</p>
         <button type='button' className='custom__button'>Explore Menu</button>
      </div>

    <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
