// TASK 2 - REACT-INLINE src/CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
      <tr style={headerRowStyle}>
            <td className={css(styles.td)}>{textFirstCell}</td>
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
  }
});

export default CourseListRow;
