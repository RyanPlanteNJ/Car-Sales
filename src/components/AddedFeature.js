import React from 'react';
import { removeFeature } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const AddedFeature = props => {
  const features = useSelector(state = state.car.features)
  const dispatch = useDispatch();
  return (
    <>
      {features.map(item => {
        return(
         <li>
          <button className="button"id={item.id} onClick={(e) => dispatch(removeFeature(e.target.id))}>X</button>
      {item.feature}
    </li>
     );
      })}
    </>
  );
};

export default AddedFeature;
