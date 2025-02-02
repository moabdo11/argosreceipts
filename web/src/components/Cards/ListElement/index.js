import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { myPadStart, chunker } from '../../../utils/Dummydata';

const CardsListEl = props => {
   return (
      <Link
         to={`${props.matchUrl}/${props._id}`}
         className="list-group-item list-group-item-action"
      >
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Card</h5>
            <small className="text-muted">
               Expires: {myPadStart(props.expiresMonth, 2, 0)}/{props.expiresYear}
            </small>
         </div>
         <p className="mb-1">Number: {chunker(props.number, 4, '-')}</p>
      </Link>
   );
};

CardsListEl.propTypes = {
   _id: PropTypes.string,
   type: PropTypes.string,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number,
   balance: PropTypes.number
};

export default CardsListEl;


