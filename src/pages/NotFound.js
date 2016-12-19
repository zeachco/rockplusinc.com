import React from 'react';
import {Sidebar} from '../components';
import {Link} from 'react-router';

export const NotFound = props => (
  <div>
    <Sidebar />
    <div id="home_content">
      <big>Ooops! "{props.params.splat}" does not exist</big>
      <p>Maybe you want to go back to &nbsp;<Link to='/'>home page</Link>
      </p>
    </div>
  </div>
);
