import React from 'react';
import '../QuoteCard.css';

const QuoteCard = ({ ShowQuoteSim }) => (
  <figure className="QuoteCard">
    <img src={ShowQuoteSim.image} alt={ShowQuoteSim.character} />
    <figcaption>
      <blockquote>{ShowQuoteSim.quote}</blockquote>
      <cite>{ShowQuoteSim.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
