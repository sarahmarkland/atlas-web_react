// TASK 2 - REACT-INLINE src/CourseList/CourseListRow.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowClass = isChecked ? css(styles.rowChecked) : '';

  if (isHeader) {
    return (
      <tr style={headerRowStyle}>
          {textSecondCell === null ? (
            <th className={css(styles.header1)} colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th className={css(styles.th)}>{textFirstCell}</th>
              <th className={css(styles.th)}>{textSecondCell}</th>
            </>
          )}
      </tr>
    );
  } else {
    return (
      <tr className={rowClass} style={rowStyle}>
          <td className={css(styles.td)}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {textFirstCell}
        </td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  header1: {
    textAlign: 'center'
  },

  th: {
    borderBottom: '2px solid black',
    textAlign: 'left'
  },

  td: {
    padding: '3px',
    textAlign: 'left'
  },

  rowChecked: {
    backgroundColor: '#e6e4e4'
  },
});

export default CourseListRow;
