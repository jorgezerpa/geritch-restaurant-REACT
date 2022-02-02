import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui delectus enim. Atque ipsam et nobis recusandae quos sit voluptatem est aliquid deserunt, dignissimos, repellat nihil maiores eaque natus unde!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora est nobis aliquid nostrum iusto voluptatem exercitationem provident architecto aut nisi autem sit eligendi aliquam excepturi fugit inventore, id ratione?</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
