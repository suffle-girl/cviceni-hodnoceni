import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [value, setValue] = useState(0);
  
  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};
