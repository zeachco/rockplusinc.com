import React from 'react';
import {LoginForm} from '../components';

const LoginPage = props => (
  <div id="login">
    <LoginForm/>
    <p id="login-footer">
      If you are looking to become a wholesale customer or for general inquiries please contact us at &nbsp;<a href="mailto:info@rockplusinc.com">info@rockplusinc.com</a>&nbsp; or 1-866-651-6366.
    </p>
  </div>
);

export {LoginPage as Login};
export default LoginPage;
