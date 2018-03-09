import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import Sidebar from '../components/Sidebar';

const NotFound = props => (
  <div>
    <Sidebar />
    <div id="home_content">
      <big>Ooops! "{props.params.splat}" does not exist</big>
      <p>Maybe you want to go back to &nbsp;<Link to='/'>home page</Link>
      </p>
    </div>
  </div>
);

NotFound.propTypes = {
  params: PropTypes.object
};

export default NotFound;
