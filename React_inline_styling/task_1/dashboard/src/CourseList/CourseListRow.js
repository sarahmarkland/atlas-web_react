// TASK 0 - REACT-INLINE src/CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader) {
    return (
      <tr style={rowStyle}>
          {textSecondCell === null ? (
            <th colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          )}
      </tr>
    );
  } else {
    return (
      <tr style={headerRowStyle}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
