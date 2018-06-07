import React from 'react';
import './UserProfile.scss';
import {Link} from 'react-router';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';

class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = () => {}

    goToIndex = () => {
        this.props.router.push('/');
    }

    render() {
        return (
            <div className="user-profile">
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
                                    <h4 className="title-text">User profile</h4>
                                </div>

                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="name">Full Name (as per NRIC)</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="nric">NRIC Number</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" id="nric"/>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="email">Email</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" id="email"/>
                                    </div>
                                    <div className="offset-3 col-9">
                                        <p className="note">For claims pay out, this email  must match the email you use for your GRAB rides.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="notification-section">
                                <div className="title-section">
                                    <h4 className="title-text">PayNow Details</h4>
                                </div>

                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="mobileNumber">Mobile Number</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id="mobileNumber" value="9748 9472" onChange={this.onChange}/>
                                    </div>
                                    <div className="col-6">
                                        <label className="label-input"><i className="fas fa-check"></i> ELSON NG KAI REN, +65 9748 9472</label>
                                    </div>
                                    <div className="offset-3 col-9">
                                        <p className="note">The same mobile number you use for your PayNow account.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="notification-section">
                                <div className="title-section">
                                    <h4 className="title-text">Notification Settings</h4>
                                </div>

                                <div className="row form-group">
                                    <div className="col-6">
                                        <label className="label-input" htmlFor="mobileNumber">
                                            Receive messages from us regarding your claims and promotions.
                                        </label>
                                    </div>
                                    <div className="col col-checkbox">
                                        <label className="form-check-label green-checkbox">
                                            <input type="checkbox" className="form-check-input"/>
                                            <i className="helper"></i>
                                            <strong>Email</strong>
                                        </label>
                                    </div>
                                    <div className="col col-checkbox">
                                        <label className="form-check-label green-checkbox">
                                            <input type="checkbox" className="form-check-input" value={true}/>
                                            <i className="helper"></i>
                                            <strong>SMS</strong>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="notification-section">
                                <div className="title-section">
                                    <h4 className="title-text">Reset Password?</h4>
                                </div>

                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="currentPassword">Current Password</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="password" className="form-control" id="currentPassword" onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="newPass">New Password</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="password" className="form-control" id="newPass" onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-3 text-right">
                                        <label className="label-input" htmlFor="confirmNewPass">Retype New Password</label>
                                    </div>
                                    <div className="col-3">
                                        <input type="password" className="form-control" id="confirmNewPass" onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-green btn-save">Update and Save</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserProfileContainer;
