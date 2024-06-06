import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p>
          <a href="#contact" id="contact-link">Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.uiReducer.get('user').toJS(),
});

export default connect(mapStateToProps)(Footer);
