import React from 'react';
import {connect} from 'react-redux';

export const Footer = props => (
  <footer>
    {props.isAuth
      ? (
        <div id="contact_content">1700 Ch. Chambly, Longueuil<br/>
          Qc, Canada, J4J 3X5<br/>
          450-651-6366<br/>
          Fax: 450-651-3695<br/>
          Free: 1-866-651-6366<br/>
          <a href="mailto:info@rockplusinc.com">info@rockplusinc.com</a>
        </div>
      )
      : null}
  </footer>
);

const mapStatetoProps = (store, ownProps) => ({isAuth: store.session.isAuth, isLoading: store.session.isLoading});

const ConnectedFooter = connect(mapStatetoProps)(Footer);
export {ConnectedFooter as Footer};
