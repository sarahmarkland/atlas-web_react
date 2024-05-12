// TASK 3 bodySectionWithMarginBottom.js
import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection/BodySection'; // Assuming the location of the BodySection component
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
