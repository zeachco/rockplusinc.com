import React from 'react';
import {LoginForm} from '../components';

const LoginPage = props => (
  <div id="login">
    <LoginForm />
    <footer>
      <p>
        If you are looking to become a wholesale customer or for general inquiries please contact us.
      </p>
      <p>
        <a className="button-link" href="mailto:info@rockplusinc.com">info@rockplusinc.com</a>
        <a className="button-link" href="tel:450-651-6366">phone: 450-651-6366</a>
        <a className="button-link" href="tel:450-651-3695">fax: 450-651-3695</a>
        <a className="button-link" href="tel:1-866-651-6366">international: 1-866-651-6366</a>
      </p>
      <p>
        1700 Ch. Chambly, Longueuil
        Qc, Canada, J4J 3X5
      </p>
    </footer>
  </div>
);

export {LoginPage as Login};
export default LoginPage;
