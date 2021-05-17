import { useState, useEffect } from 'react';

import photo from './img/cauliflower.jpeg';

const Card = (props) => {
  return (
    <div className="Card">
      <img src={photo} alt="cauliflower" />
    </div>
  );
}

export default Card;