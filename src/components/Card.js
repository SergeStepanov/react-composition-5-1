import React from 'react';
import BtnLink from './BtnLink';

export default function Card({ children, img }) {
  return (
    <div className='card' style={{ width: 18 + 'rem' }}>
      {img && <img src={img} className='card-img-top' alt='...' />}
      <div className='card-body'>
        {children}
        <BtnLink href='#0' className='btn btn-primary'>
          Go somewhere
        </BtnLink>
      </div>
    </div>
  );
}
