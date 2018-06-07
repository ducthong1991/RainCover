import React from 'react';
import './AccountPassword.scss';

import logoImg from '../assets/droplet-logo.png';
import logOutImg from '../assets/logout-icon.png';
import notRobotImg from '../assets/not-robot-img.png';

class AccountPasswordComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = () => {
    }

    goToOrderSummary = () => {
        this.props.router.push('/order-summary');
    }

    goToIndex = () => {
        this.props.router.push('/');
    }

    render() {
        return (
            <div className="account-password">
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
                <div className="progress">
                    <div className="finish-progress"></div>
                </div>

                <div className="container history-container">

                    <div className="row">
                        <div className="offset-1 col-10">
                            <div className="step-section">
                                <h4 className="step-text">Your Droplet Account Password</h4>
                            </div>
                            <div className="password-section">
                                <div className="form-group">
                                    <label htmlFor="pass">New password</label>
                                    <input type="password" className="form-control" id="pass"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rePass">Retype new password</label>
                                    <input type="password" className="form-control" id="rePass"
                                           placeholder="Retype new password"/>
                                </div>
                                <div>
                                    <img src={notRobotImg} className="not-robot-img"/>
                                </div>

                                <button className="btn btn-green btn-checkout" onClick={this.goToOrderSummary}>STEP 3 : ORDER SUMMARY ➡ </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AccountPasswordComponent;
