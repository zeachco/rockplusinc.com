import React from 'react';
import Sidebar from '../components/Sidebar';

const year = new Date().getFullYear();
const Home = () => (
  <div>
    <Sidebar />
    <div id="home_content">
      <h1>WE ARE PROUD TO INTRODUCE YOU TO OUR NEW {year}&nbsp;CATALOG</h1>
      <p>ROCK&nbsp;<font color="#080">PLUS</font>&nbsp;INC. is Canada&apos;s number one supplier of quality smoking ustensils.<br/>
        We have the biggest selection of smoking accessories in Canada.<br/>
        All our products on this site are 100% legal in Canada.<br/>
        Our experience guaranties competitive prices in an extensive range of unsurpassed quality products.
      </p>
      <h2>WE WILL MATCH ANY COMPETITORS PRICES</h2>
      <p>At ROCK PLUS INC. we take pride in our commitment to give reliable and courteous customer service.<br/>
        We have the ressources to ensure all orders are processed and shipped in an efficient and timely manner.<br/>
        We are 100% Canadian owned and operated.
      </p>
      <p className="big">Compare our prices,<br/>
        you'll find our competitive pricing policy ensures<br/>
        our clients come first.
      </p>
      <footer>
        <p>
          <a className="button-link" href="mailto:info@rockplusinc.com">info@rockplusinc.com</a><br/>
          <a className="button-link" href="tel:450-651-6366">phone: 450-651-6366</a><br/>
          <a className="button-link" href="tel:450-651-3695">fax: 450-651-3695</a><br/>
          <a className="button-link" href="tel:1-866-651-6366">international: 1-866-651-6366</a>
        </p>
        <p>
          1700 Ch. Chambly, Longueuil
          Québec, Canada, J4J 3X5
        </p>
      </footer>
    </div>
  </div>
);

export default Home;
