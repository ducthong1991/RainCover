import React from 'react';
import './BuyDroplet.scss';
import {Link} from 'react-router';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';

class BuyDropletContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = () => {}

    goToIndex = () => {
        this.props.router.push('/');
    }

    render() {
        return (
            <div className="buy-droplet">
                <div className="header-section">
                    <div className="header-items">
                        <div className="header-left">
                            <img src={logoImg} className="droplet-logo" onClick={this.goToIndex}/>
                        </div>
                        <div className="header-right">
                            <label className="name-text clickable">Welcome back, Elson Ng</label>
                            <div className="slash-div"></div>
                            <label className="name-text clickable">Log out</label>

                            <img src={logOutImg} className="logout-img clickable"/>
                        </div>
                    </div>
                </div>

                <div className="container notification-container">
                    <div className="row">
                        <div className="col-2">
                            <button className="btn btn-white">Buy Droplet</button>
                            <button className="btn btn-white">Invite Friends</button>
                            <div className="list-menu">
                                <Link to='/droplet-history'>Droplet History</Link>
                                <label>Payment Method</label>
                                <Link to='/user-profile'>User Profile</Link>
                            </div>
                        </div>

                        <div className="col-10">
                            <div className="notification-section">
                                <div className="title-section">
                                    <h4 className="title-text">Buy Droplet</h4>
                                </div>
                                <div className="detail-section">
                                    <h4>We got you covered!</h4>
                                    <p>You can now see your cover in your Droplet History.</p>
                                    <p>An email will also be sent to you to confirm your Droplet dates.</p>
                                    <p>Now go forth and #embracetherain</p>
                                    <button className="btn btn-green btn-buy">Buy More Droplets?</button>
                                </div>
                            </div>

                            <div className="notification-section last-section">
                                <div className="title-section">
                                    <h4 className="title-text">Invite Friends</h4>
                                </div>
                                <div className="detail-section">
                                    <h4>Know someone as cool as you?<br/>
                                        Invite them to Droplet and get free cover days!</h4>
                                    <p>You’ll get one cover day free for every friend that signs up! </p>
                                    <p>Give your friends free cover to sign up through this special link that belongs to you!</p>
                                    <div className="link-section text-center">
                                        <div className="link-text">https://bit.ly/1hU7ETu</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BuyDropletContainer;
