import React from 'react';

const CartItem = () => (
    <div className="card">
        <div className="card-content">
            <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
            </div>
            </div>
            <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br/>
            <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </div>
    </div>
);

export default CartItem;

