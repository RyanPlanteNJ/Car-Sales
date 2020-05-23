import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector } from 'react-redux';

const AdditionalFeatures = props => {
  const additionalFeatures = useSelector(state=>state.additionalFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {!additionalFeatures.length ? (
        <p>Nice looking car!</p>
      ) : (
        <ol type="1">
          <AdditionalFeature />
        </ol>
      )}
    </div>
  );
};

export default AdditionalFeatures;
