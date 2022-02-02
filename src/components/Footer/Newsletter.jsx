import React from 'react';

import { SubHeading } from '../../components';


import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-subheading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Suscribe To Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='enter yout email adress'/>
      <button className='custom__button'>Susbcribe</button>
    </div>
  </div>
);

export default Newsletter;
