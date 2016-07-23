import { Link } from 'react-router';

const url = 'https://docs.google.com/document/d/1NeFYD-j1F0IHF0ARe4YxrMe2PvTXn67gJJTm3uUfQHA/edit';

const FullItinerary = () => {
  return (
    <Link className='itinerary' target="_blank" to={url} >full itinerary</Link>
  )
};

export default FullItinerary;
