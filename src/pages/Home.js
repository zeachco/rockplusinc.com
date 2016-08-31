import React from 'react';
import {Sidebar} from '../components';

const year = new Date().getFullYear();
export const Home = props => (
  <div>
    <Sidebar {...props} auth={{username:'bob'}} categories={[]}/>
    <div id="home_content">
      <h1>WE ARE PROUD TO INTRODUCE YOU TO OUR NEW {year} CATALOG</h1>
      <p>ROCK
        <font color="#080">PLUS</font>
        INC. is Canada's number one supplier of quality smoking ustensils.<br/>
        We have the biggest selection of smoking accessories in Canada.<br/>
        All our products on this site are 100% legal in Canada.<br/>
      Our experience guaranties competitive prices in an extensive range of unsurpassed quality products.</p>
      <h2>WE WILL MATCH ANY COMPETITORS PRICES</h2>
      <p>At ROCK PLUS INC. we take pride in our commitment to give reliable and courteous customer service.<br/>
        We have the ressources to ensure all orders are processed and shipped in an efficient and timely manner.<br/>
      We are 100% Canadian owned and operated.</p>
      <p className="big">Compare our prices,<br/>
        you'll find our competitive pricing policy ensures<br/>
        our clients come first.</p>
      <div id="contact_content">1700 Ch. Chambly, Longueuil<br/>
        Qc, Canada, J4J 3X5<br/>
        450-651-6366<br/>
        Fax: 450-651-3695<br/>
        Free: 1-866-651-6366<br/>
        <a href="mailto:info@rockplusinc.com">info@rockplusinc.com</a>
      </div>
    </div>
  </div>
);
